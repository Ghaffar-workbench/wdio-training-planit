import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get flashAlert () {
        return $('#flash');
    }

    public get textAlert () {
        return $('//*[@id="login-error"]/strong');
    }

}

export default new SecurePage();
