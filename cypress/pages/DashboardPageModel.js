import FlightDetailsPage from "../pages/FlightDetailsPageModel";
import LoginPage from "../pages/LoginPageModel";

class DashboardPage {
    constructor() {
        this.btnPlanALaunch = "button";
        this.cardLaunch = "launch-plan-item";
        this.missionName = "div[class='mission-name']";
        this.launchStatus = "div[class='mission-name']";
        this.btnEditCard = "i[class='fa fa-pencil']";
        this.btnLogout = "a";
    }

    clickPlanALaunch = () => {
        cy.contains(this.btnPlanALaunch,'Plan A Launch').click()
        return this;
    }

    clickEditLaunch = () => {
        cy.wait(500);
        cy.get(this.btnEditCard).click()
        return this;
    }

    clickLogout = () => {
        cy.contains(this.btnLogout,'Logout').click()
        return this;
    }

    navigateToFlightDetails = () => {
        const flightDetails = new FlightDetailsPage();
        return flightDetails;
    }

    navigateToLogin = () => {
        const login = new LoginPage();
        return login;
    }

    verifyCreatedLaunch = (missionName) => {
        cy.get(this.missionName).children("span").last()
        .should('have.text',missionName);
    }

    verifyLaunchStatus = (status) => {
        cy.get(this.launchStatus).children("span").first()
        .contains(status);
    }

    isDisplayed = () => {
        cy.contains(this.btnPlanALaunch,'Plan A Launch')
        .should('be.visible')
        return this;
    }
    
}

export default DashboardPage;