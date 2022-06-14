import TodoMvcPage from '../pageobjects/todomvc.page';
import {baseUrl, taskName} from '../config/project/config';

let modifiedName = '_modified';

describe('task should be modified in the list', () => {
it('task is modified', async() => {
    await TodoMvcPage.open(baseUrl);

    await TodoMvcPage.addTask(taskName);
    await expect(await TodoMvcPage.tasksList.length).toEqual(1);

    await TodoMvcPage.modifyTaskByAdding(modifiedName);
    await expect(await TodoMvcPage.tasksList.length).toEqual(1);
    await expect(await TodoMvcPage.firstTask.getText()).toEqual(taskName+modifiedName);
    })
});

// await new Promise(f => setTimeout(f, 5000));
