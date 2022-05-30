import FlightDetailsPage from "../pages/FlightDetailsPageModel";
import LoginPage from "../pages/LoginPageModel";

class DashboardPage {
    private btnPlanALaunch: string = "button";
    private missionName: string = "div[class='mission-name']";
    private launchStatus: string = "div[class='mission-name']";
    private btnEditCard: string = "i[class='fa fa-pencil']";
    private btnLogout: string = "a";

    constructor() {
    }

    clickPlanALaunch = (): DashboardPage => {
        cy.contains(this.btnPlanALaunch,'Plan A Launch').click()
        return this;
    }

    clickEditLaunch = (): DashboardPage => {
        cy.wait(500);
        cy.get(this.btnEditCard).click()
        return this;
    }

    clickLogout = (): DashboardPage => {
        cy.contains(this.btnLogout,'Logout').click()
        return this;
    }

    navigateToFlightDetails = (): FlightDetailsPage => {
        const flightDetails = new FlightDetailsPage();
        return flightDetails;
    }

    navigateToLogin = (): LoginPage => {
        const login = new LoginPage();
        return login;
    }

    verifyCreatedLaunch = (missionName: string): DashboardPage => {
        cy.get(this.missionName).children("span").last()
        .should('have.text',missionName)
        return this;
    }

    verifyLaunchStatus = (status: string): DashboardPage => {
        cy.wait(500);
        cy.get(this.launchStatus).children("span").first()
        .contains(status)
        return this;
    }

    isDisplayed = (): DashboardPage => {
        cy.contains(this.btnPlanALaunch,'Plan A Launch')
        .should('be.visible')
        return this;
    }
    
}

export default DashboardPage;