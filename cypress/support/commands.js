import LoginPage from "../pages/LoginPageModel";
import DashboardPage from "../pages/DashboardPageModel";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login', userDetail => { 
    const loginPage = new LoginPage();

    let dashboardPage =  loginPage.enterUsername(userDetail.username)
        .enterPassword(userDetail.password)
        .clickLogin()
        .navigateToDashboard()

    dashboardPage.isDisplayed();
    cy.on('window:confirm', () => true);
});

Cypress.Commands.add('createNewLaunch', flightDetails => {
    const dayjs = require('dayjs')
    let currentDate = dayjs().format('DD/M/YYYY').split('/');
    let day = currentDate[0];
    let month = currentDate[1];
    const dashboardPage = new DashboardPage();

    let flightDetailsPage = dashboardPage.clickPlanALaunch()
        .navigateToFlightDetails();

    flightDetailsPage.isDisplayed()
        .enterMissionName(flightDetails.missionName)
        .enterMissionDetails(flightDetails.details)
        .enterLaunchWindow(flightDetails.launchWindow)
        .selectStatus(flightDetails.status)
        //DatePicker
        .clickDatePicker()
        .selectMonth(month)
        .clickDay(month,day)
        .clickSave()
        .clickAddRecordYes()
        .navigateToDashboard();

    dashboardPage.isDisplayed()
        .verifyCreatedLaunch(flightDetails.missionName);
    
});

Cypress.Commands.add('updateLaunch', flightDetails => { 
    const dashboardPage = new DashboardPage();

    let flightDetailsPage = dashboardPage.clickEditLaunch()
        .navigateToFlightDetails();

    flightDetailsPage.isDisplayed()
        .clearMissionDetails()
        .enterMissionDetails(flightDetails.updatedDetails)
        .selectStatus(flightDetails.updatedStatus)
        .clickSave()
        .clickAddRecordYes()
        .navigateToDashboard();

    dashboardPage.isDisplayed()
        .verifyLaunchStatus(flightDetails.updatedStatus);

 });

 Cypress.Commands.add('logout', () => { 
    const dashboardPage = new DashboardPage();

    let loginPage =  dashboardPage.clickLogout()
        .navigateToLogin();
        
    loginPage.isDisplayed();
    cy.on('window:confirm', () => true);
})
