import TodoMvcPage from '../pageobjects/todomvc.page';
import {baseUrl, taskName, tasksNames} from '../config/project/config';

describe('task should be added to the list', () => {
it('one task is added', async() => {
    await TodoMvcPage.open(baseUrl);
    await TodoMvcPage.addTask(taskName);

    await expect(TodoMvcPage.leftTasksAmount).toHaveText('1');
    await expect(await TodoMvcPage.tasksList.length).toEqual(1);
    await expect(await TodoMvcPage.firstTask.getText()).toEqual(taskName);
    });

it('two tasks are added', async() => {
    await TodoMvcPage.open(baseUrl);
    await TodoMvcPage.addTasks(tasksNames);

    await expect(TodoMvcPage.leftTasksAmount).toHaveText(tasksNames.length.toString());
    await expect(await TodoMvcPage.tasksList.length).toEqual(tasksNames.length);
    });

afterEach(async () => {
    await TodoMvcPage.removeFirstTask();
    });

});
