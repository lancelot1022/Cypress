import LoginPage from "./LoginPageModel";

class RegisterPage {

    private lblCreateAcc: string = "h4";
    private txtEmail: string = "input[formcontrolname='email']";
    private txtPassword: string = "input[formcontrolname='password']";
    private txtFName: string = "input[formcontrolname='firstName']";
    private txtMName: string = "input[formcontrolname='middleName']";
    private txtLName: string = "input[formcontrolname='lastName']";
    private txtBDay: string = "input[formcontrolname='birthDay']";
    private btnRegister: string = "button";

    constructor() {
    }

    enterEmail = (email: string): RegisterPage => {
        cy.get(this.txtEmail).type(email)
        return this;
    }

    enterPassword = (password: string): RegisterPage => {
        cy.get(this.txtPassword).type(password)
        return this;
    }

    enterFname = (fName: string): RegisterPage => {
        cy.get(this.txtFName).type(fName)
        return this;
    }

    enterMname = (mName: string): RegisterPage => {
        cy.get(this.txtMName).type(mName)
        return this;
    }

    enterLname = (lName: string): RegisterPage => {
        cy.get(this.txtLName).type(lName)
        return this;
    }

    enterBDay = (bDay: string): RegisterPage => {
        cy.get(this.txtBDay).type(bDay)
        return this;
    }

    clickRegister = (): RegisterPage => {
        cy.contains(this.btnRegister,'Register').click();
        return this;
    }
    
    navigateToLogin = (): LoginPage => {
        const login = new LoginPage();
        return login;
    }

    isDisplayed = (): RegisterPage => {
        cy.contains(this.lblCreateAcc, 'Create an account')
        .should('be.visible')
        return this;
    }
}

export default RegisterPage;