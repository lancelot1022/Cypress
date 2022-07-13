import HomePage from "./HomePageModel";

class LoginPage {

    private txtEmail: string = "input[formcontrolname='email']";
    private txtPassword: string = "input[formcontrolname='password']";
    private btnLogin: string = "Login";

    constructor() {
    }

    enterEmail = (email: string): LoginPage => {
        cy.get(this.txtEmail).type(email)
        return this;
    }

    enterPassword = (password: string): LoginPage => {
        cy.get(this.txtPassword).type(password)
        return this;
    }

    clickLogin = (): LoginPage => {
        cy.contains('button', this.btnLogin).click();
        return this;
    }
    
    navigateToHome = (): HomePage => {
        const homePage = new HomePage();
        return homePage;
    }

    isDisplayed = (): LoginPage => {
        cy.contains('button', this.btnLogin)
        .should('be.visible')
        return this;
    }
}

export default LoginPage;