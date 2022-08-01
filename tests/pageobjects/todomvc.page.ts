import { ChainablePromiseElement } from 'webdriverio';
import BasePage from "./base.page";

class TodoMvcPage extends BasePage {
    #mainInput: string = '.new-todo';
    #todoList: string  = '.todo-list';
    #tasksList: string  = 'li';
    #deleteButton: string  = 'button.destroy';
    #leftTasksAmount:string = '.todo-count>strong'
    #checkboxForCompleted:string = 'input[type="checkbox"]'
    #editInput:string = 'input.edit'

    constructor(){
        super();
    }

    get mainInput(): ChainablePromiseElement<WebdriverIO.Element> {
        return $(this.#mainInput);
    }

    get todoList(): ChainablePromiseElement<WebdriverIO.Element> {
        return $(this.#todoList);
    }

    get tasksList(): ChainablePromiseArray<Promise<WebdriverIO.Element>> {
        return $(this.#todoList).$$(this.#tasksList);
    }

    get firstTask(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.tasksList[0];
    }

    get leftTasksAmount(): ChainablePromiseElement<WebdriverIO.Element> {
        return $(this.#leftTasksAmount);
    }

    get deleteButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return $(this.#deleteButton);
    }

    async setMainInput(text: string){
        await this.mainInput.setValue(text);
    }

    async addTask(text: string){
        await this.mainInput.setValue(text);
        browser.keys("\uE007"); //press Enter
    }

    async addTasks(tasksNames: string[]){
        for (const taskName of tasksNames) {
          await this.addTask(taskName);
        }
    }

    async removeFirstTask(){
        await this.firstTask.moveTo();
        await this.deleteButton.click();
    }

    async removeAllTasks(tasksNumber: number){
        await Array.from({length: tasksNumber}, async() => {
            await this.removeFirstTask();
        });
    }

    async markFirstTaskAsCompleted(){
        await this.firstTask.$(this.#checkboxForCompleted).click();
    }

    async markTasksAsCompleted(tasksNumber: number){
       for (let taskNumber = 0; taskNumber < tasksNumber; taskNumber++) {
         await this.tasksList[taskNumber].$(this.#checkboxForCompleted).click();
       }
    }

    async modifyTaskByAdding(modifiedText: string){
        await this.firstTask.doubleClick();
        await this.firstTask.$(this.#editInput).addValue(modifiedText);
        browser.keys("\uE007"); //press Enter
    }
}

export default new TodoMvcPage();
