import DashboardPage from "../pages/DashboardPageModel";

class FlightDetailsPage {
    constructor() {
        this.lblPlanNewANewLaunch = "h3"
        this.txtMissionName = "input[name='missionname']";
        this.txtDetails = "textarea[name='detail']";
        this.txtLaunchWindow = "input[name='launchWindow']";
        this.drpStatus = "select[name='launchSuccess']";
        this.btnSave = "button";
        this.btnCancel = "button";
        this.btnAddRecordYes = "button";

        //DatePicker
        this.btnLaunchDate = "span[class='fa fa-calendar']";
        this.drpMonth = "select[title='Select month']";
        this.btnDayPicker = "div[class='ngb-dp-day']";
    }

    enterMissionName = (missionName) => {
        cy.get(this.txtMissionName).type(missionName)
        return this;
    }

    enterMissionDetails = (details) => {
        cy.get(this.txtDetails).type(details)
        return this;
    }

    clearMissionDetails = () => {
        cy.get(this.txtDetails).clear()
        return this;
    }

    enterLaunchWindow = (launchWindow) => {
        cy.get(this.txtLaunchWindow).type(launchWindow)
        return this;
    }

    selectStatus = (status) => {
        cy.get(this.drpStatus).select(status)
        return this;
    }

    clickSave = () => {
        cy.contains(this.btnSave,'Save').click();
        return this;
    }

    clickCancel = () => {
        cy.contains(this.btnCancel,'Cancel').click();
        return this;
    }

    clickAddRecordYes = () => {
        cy.contains(this.btnSave,'Yes').click();
        return this;
    }

    //DatePicker
    clickDatePicker = () => {
        cy.get(this.btnLaunchDate).click();
        return this;
    }

    selectMonth = (month) => {
        cy.get(this.drpMonth).select(month)
        return this;
    }

    clickDay = (month,day) => {
        cy.get(this.btnDayPicker).children("div[ng-reflect-current-month='"+month+"']").eq(day).click();
        return this;
    }

    navigateToDashboard = () => {
        const dashboard = new DashboardPage();
        return dashboard;
    }

    isDisplayed = () => {
        cy.contains(this.lblPlanNewANewLaunch,'Plan a new Launch')
        .should('be.visible')
        return this;
    }
    
}

export default FlightDetailsPage;