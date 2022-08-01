import TodoMvcPage from '../pageobjects/todomvc.page';
import {baseUrl, taskName, tasksNames} from '../config/project/config';
import {tearDownBrowser} from '../utils/browser.tools';

describe('task should be removed from the list', () => {
   it('first task is removed', async() => {
     await TodoMvcPage.open(baseUrl);
     await TodoMvcPage.addTask(taskName);
     await expect(await TodoMvcPage.tasksList.length).toEqual(1);

     await TodoMvcPage.removeFirstTask();
     await expect(await TodoMvcPage.todoList).not.toBeDisplayed();
    });

   it('two completed tasks are removed', async() => {
     let tasksNumber = tasksNames.length;

     await TodoMvcPage.open(baseUrl);
     await TodoMvcPage.addTasks(tasksNames);
     await expect(await TodoMvcPage.tasksList.length).toEqual(tasksNumber);

     await TodoMvcPage.markTasksAsCompleted(tasksNumber);
     await expect(TodoMvcPage.leftTasksAmount).toHaveText(('0').toString());

     await TodoMvcPage.removeAllTasks(tasksNames.length);
     await expect(await TodoMvcPage.todoList).not.toBeDisplayed();
   });

   const tests = [
     { completeTasksNumber: 1, tasksLeftAmount: 2 },
     { completeTasksNumber: 2, tasksLeftAmount: 1 }
   ];

   tests.forEach(({ completeTasksNumber, tasksLeftAmount }) => {
     it(`${completeTasksNumber} completed task(s) should be removed (from all three tasks)`, async() => {

         let allTasks = ["task 1", "task 2", "task 3"];

         await TodoMvcPage.open(baseUrl);
         await TodoMvcPage.addTasks(allTasks);
         await expect(await TodoMvcPage.tasksList.length).toEqual(allTasks.length);

         await TodoMvcPage.markTasksAsCompleted(completeTasksNumber);
         await expect(TodoMvcPage.leftTasksAmount).toHaveText((allTasks.length-completeTasksNumber).toString());
         
         await TodoMvcPage.removeAllTasks(completeTasksNumber);
         await expect(TodoMvcPage.leftTasksAmount).toHaveText((tasksLeftAmount).toString());
     });
   });

   afterEach(async () => {
      await tearDownBrowser();
   });
});
