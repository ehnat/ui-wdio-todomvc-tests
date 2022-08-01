export const tearDownBrowser = async() => {
   await browser.deleteCookies();
   await browser.reloadSession();
};