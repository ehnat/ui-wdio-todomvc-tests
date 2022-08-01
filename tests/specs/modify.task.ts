import TodoMvcPage from '../pageobjects/todomvc.page';
import {baseUrl, taskName} from '../config/project/config';
import {tearDownBrowser} from '../utils/browser.tools';

let modifiedName = '_modified';

describe('task should be modified in the list', () => {
  it('task is modified', async() => {
    await TodoMvcPage.open(baseUrl);
    await TodoMvcPage.addTask(taskName);
    await expect(await TodoMvcPage.tasksList.length).toEqual(1);

    await TodoMvcPage.modifyTaskByAdding(modifiedName);

    await expect(await TodoMvcPage.tasksList.length).toEqual(1);
    await expect(await TodoMvcPage.firstTask.getText()).toEqual(taskName+modifiedName);
  });

  it('task marked as completed', async() => {
    await TodoMvcPage.open(baseUrl);
    await TodoMvcPage.addTask(taskName);
    await expect(await TodoMvcPage.tasksList.length).toEqual(1);

    await TodoMvcPage.markFirstTaskAsCompleted();

    await expect(await TodoMvcPage.tasksList.length).toEqual(1);
    await expect(TodoMvcPage.leftTasksAmount).toHaveText('0');
  });

  const tests = [
    { completeTasksNumber: 2 },
    { completeTasksNumber: 1 }
  ];

  tests.forEach(({ completeTasksNumber }) => {
    it(`${completeTasksNumber} task(s) marked as completed`, async() => {

      let allTasks = ["task 1", "task 2", "task 3"];

      await TodoMvcPage.open(baseUrl);
      await TodoMvcPage.addTasks(allTasks);
      await expect(await TodoMvcPage.tasksList.length).toEqual(allTasks.length);

      await TodoMvcPage.markTasksAsCompleted(completeTasksNumber);

      await expect(await TodoMvcPage.tasksList.length).toEqual(allTasks.length);
      await expect(TodoMvcPage.leftTasksAmount).toHaveText((allTasks.length-completeTasksNumber).toString());
    });
  });

  afterEach(async () => {
    await tearDownBrowser();
  });
});

