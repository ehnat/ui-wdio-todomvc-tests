import { ChainablePromiseElement } from 'webdriverio';
import BasePage from "./base.page";

class TodoMvcPage extends BasePage {
    #mainInput: string = '.new-todo';
    #todoList: string  = '.todo-list';
    #tasksList: string  = 'li';
    #leftTasksAmount:string = '.todo-count>strong'

    constructor(){
        super();
    }

    get mainInput(): ChainablePromiseElement<WebdriverIO.Element> {
        return $(this.#mainInput);
    }

    get leftTasksAmount(): ChainablePromiseElement<WebdriverIO.Element> {
        return $(this.#leftTasksAmount);
    }

    async setMainInput(text: string){
        await $(this.#mainInput).setValue(text);
    }

    async addTask(text: string){
        await $(this.#mainInput).setValue(text);
        browser.keys("\uE007"); //press Enter
    }
}

export default new TodoMvcPage();
