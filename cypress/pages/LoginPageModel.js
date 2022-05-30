import DashboardPage from "../pages/DashboardPageModel";

class LoginPage {
    constructor() {
        this.txtUserName = "input[name='username']";
        this.txtPassword = "input[name='password']";
        this.btnLogin = "button";
    }

    enterUsername = (username) => {
        cy.get(this.txtUserName).type(username)
        return this;
    }

    enterPassword = (password) => {
        cy.get(this.txtPassword).type(password)
        return this;
    }

    clickLogin = () => {
        cy.contains(this.btnLogin,'Login').click();
        return this;
    }
    
    navigateToDashboard = () => {
        const dashboard = new DashboardPage();
        return dashboard;
    }

    isDisplayed = () => {
        cy.get(this.txtUserName)
        .should('be.visible')
        return this;
    }
}

export default LoginPage;