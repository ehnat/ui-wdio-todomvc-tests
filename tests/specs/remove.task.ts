import TodoMvcPage from '../pageobjects/todomvc.page';
import {baseUrl, taskName} from '../config/project/config';

describe('task should be removed from the list', () => {
it('first task is removed', async() => {
    await TodoMvcPage.open(baseUrl);

    await TodoMvcPage.addTask(taskName);
    await expect(await TodoMvcPage.tasksList.length).toEqual(1);

    await TodoMvcPage.removeFirstTask();
    await expect(await TodoMvcPage.todoList).not.toBeDisplayed();
    })
});
