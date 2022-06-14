import TodoMvcPage from '../pageobjects/todomvc.page';
import {baseUrl, taskName} from '../config/project/config';

describe('task should be modified in the list', () => {
it('task marked as completed', async() => {
    await TodoMvcPage.open(baseUrl);

    await TodoMvcPage.addTask(taskName);
    await expect(await TodoMvcPage.tasksList.length).toEqual(1);

    await TodoMvcPage.markTaskAsCompleted();
    await expect(await TodoMvcPage.tasksList.length).toEqual(1);
    await expect(TodoMvcPage.leftTasksAmount).toHaveText('0');
    })
});
