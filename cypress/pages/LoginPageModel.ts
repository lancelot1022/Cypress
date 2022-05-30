import DashboardPage from "../pages/DashboardPageModel";

class LoginPage {

    private txtUserName: string = "input[name='username']";
    private txtPassword: string = "input[name='password']";
    private btnLogin: string = "button";

    constructor() {
    }

    enterUsername = (username: string): LoginPage => {
        cy.get(this.txtUserName).type(username)
        return this;
    }

    enterPassword = (password: string): LoginPage => {
        cy.get(this.txtPassword).type(password)
        return this;
    }

    clickLogin = (): LoginPage => {
        cy.contains(this.btnLogin,'Login').click();
        return this;
    }
    
    navigateToDashboard = (): DashboardPage => {
        const dashboard = new DashboardPage();
        return dashboard;
    }

    isDisplayed = (): LoginPage => {
        cy.get(this.txtUserName)
        .should('be.visible')
        return this;
    }
}

export default LoginPage;