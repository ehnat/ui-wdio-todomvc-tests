import TodoMvcPage from '../pageobjects/todomvc.page';

let taskName = 'Task 1';
let baseUrl = 'https://todomvc.com/examples/vanillajs/';

describe('task should be added to the list', () => {
it('one task', async() => {
    await TodoMvcPage.open(baseUrl);
    await TodoMvcPage.addTask(taskName);

    await expect(TodoMvcPage.leftTasksAmount).toHaveText('1');
    await expect(await TodoMvcPage.tasksList.length).toEqual(1);
    await expect(await TodoMvcPage.firstTask.getText()).toEqual(taskName);
    })
});
