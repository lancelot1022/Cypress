import DashboardPage from "../pages/DashboardPageModel";

class FlightDetailsPage {
    private lblPlanNewANewLaunch: string = "h3"
    private txtMissionName: string = "input[name='missionname']";
    private txtDetails: string = "textarea[name='detail']";
    private txtLaunchWindow: string = "input[name='launchWindow']";
    private drpStatus: string = "select[name='launchSuccess']";
    private btnSave: string = "button";
    private btnCancel: string = "button";
    private btnAddRecordYes: string = "button";

    //DatePicker
    private btnLaunchDate: string = "span[class='fa fa-calendar']";
    private drpMonth: string = "select[title='Select month']";
    private btnDayPicker: string = "div[class='ngb-dp-day']";

    constructor() {
    }

    enterMissionName = (missionName: string): FlightDetailsPage => {
        cy.get(this.txtMissionName).type(missionName)
        return this;
    }

    enterMissionDetails = (details: string): FlightDetailsPage => {
        cy.get(this.txtDetails).type(details)
        return this;
    }

    clearMissionDetails = (): FlightDetailsPage => {
        cy.get(this.txtDetails).clear()
        return this;
    }

    enterLaunchWindow = (launchWindow: string): FlightDetailsPage => {
        cy.get(this.txtLaunchWindow).type(launchWindow)
        return this;
    }

    selectStatus = (status: string): FlightDetailsPage => {
        cy.get(this.drpStatus).select(status)
        return this;
    }

    clickSave = (): FlightDetailsPage => {
        cy.contains(this.btnSave,'Save').click();
        return this;
    }

    clickCancel = (): FlightDetailsPage => {
        cy.contains(this.btnCancel,'Cancel').click();
        return this;
    }

    clickAddRecordYes = (): FlightDetailsPage => {
        cy.contains(this.btnSave,'Yes').click();
        return this;
    }

    //DatePicker
    clickDatePicker = (): FlightDetailsPage => {
        cy.get(this.btnLaunchDate).click();
        return this;
    }

    selectMonth = (month: string): FlightDetailsPage => {
        cy.get(this.drpMonth).select(month)
        return this;
    }

    clickDay = (month: string, day: string): FlightDetailsPage => {
        cy.get(this.btnDayPicker).children("div[ng-reflect-current-month='"+month+"']").eq(Number(day)).click();
        return this;
    }

    navigateToDashboard = (): DashboardPage => {
        const dashboard = new DashboardPage();
        return dashboard;
    }

    isDisplayed = (): FlightDetailsPage => {
        cy.contains(this.lblPlanNewANewLaunch,'Plan a new Launch')
        .should('be.visible')
        return this;
    }
    
}

export default FlightDetailsPage;