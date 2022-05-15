export default abstract class BasePage {
    async open(path: string){
        await browser.url(path);
    }
}