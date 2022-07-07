import TodoMvcPage from '../pageobjects/todomvc.page';
import {baseUrl, taskName, tasksNames} from '../config/project/config';

describe('task should be removed from the list', () => {
it('first task is removed', async() => {
    await TodoMvcPage.open(baseUrl);

    await TodoMvcPage.addTask(taskName);
    await expect(await TodoMvcPage.tasksList.length).toEqual(1);

    await TodoMvcPage.removeFirstTask();
    await expect(await TodoMvcPage.todoList).not.toBeDisplayed();
    })

it('two tasks are removed', async() => {
    await TodoMvcPage.open(baseUrl);

    await TodoMvcPage.addTasks(tasksNames);
    await expect(await TodoMvcPage.tasksList.length).toEqual(2);

    await TodoMvcPage.removeAllTasks(tasksNames.length);
    await expect(await TodoMvcPage.todoList).not.toBeDisplayed();
    });
});
