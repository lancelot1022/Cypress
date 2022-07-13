import LoginPage from "../pages/LoginPageModel";
import HomePage from "../pages/HomePageModel";
import AdminPage from "../pages/AdminPageModel";

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

Cypress.Commands.add('register', (userDetail) => { 
    const homePage = new HomePage();
    let registerPage = homePage.clickRegister()
        .navigateToRegister()

        registerPage.isDisplayed();

    let loginPage =  registerPage.enterEmail(userDetail.email)
        .enterPassword(userDetail.password)
        .enterFname(userDetail.fName)
        .enterMname(userDetail.mName)
        .enterLname(userDetail.lName)
        .enterBDay(userDetail.bDay)
        .clickRegister()
        .navigateToLogin()

        loginPage.isDisplayed();
});

Cypress.Commands.add('login', (userDetail) => { 
    const loginPage = new LoginPage();

    let homePage =  loginPage.enterEmail(userDetail.email)
        .enterPassword(userDetail.password)
        .clickLogin()
        .navigateToHome()

    homePage.isDisplayed();
});

Cypress.Commands.add('logout', () => { 
    const homePage = new HomePage();

    let loginPage =  homePage.clickLogout()
        .navigateToLogin();
        
    loginPage.isDisplayed();
});

Cypress.Commands.add('verifyMenuTabs', () => { 
    const homePage = new HomePage();

    homePage.verifyMenuTabs();
});

Cypress.Commands.add('verifyEmailInMenu', (userDetail) => { 
    const homePage = new HomePage();

    homePage.verifyEmailInNavBar(userDetail.email);
});

Cypress.Commands.add('addbranch', (name, address) => { 
    const adminPage = new AdminPage();

    adminPage.clickAddBranches();
    adminPage.enterBranchName(name);
    adminPage.enterBranchAddress(address);
    adminPage.clickAdd();
});

Cypress.Commands.add('verifyCreatedBranch', (name) => { 
    const adminPage = new AdminPage();

    adminPage.searchCreatedBranch(name);
    adminPage.verifyBranchName(name);
    adminPage.clickBackToList();
});

Cypress.Commands.add('addCinema', (name) => { 
    const adminPage = new AdminPage();

    adminPage.clickAddCinema();
    adminPage.enterCinemaName(name);
    adminPage.clickAdd();
});

Cypress.Commands.add('verifyCinema', (name) => { 
    const adminPage = new AdminPage();

    adminPage.verifyCreatedCinema(name);
    adminPage.clickViewSchedules();
    adminPage.verifyCinemaInDropDown(name);
});

Cypress.Commands.add('addMovie', (movieDetail) => {
    //Get current date/time to set as Start Date and Hour Min
    let dateNow = new Date();
    let currentMo = dateNow.getMonth()+1
    let movieDate = dateNow.getFullYear()+'-'+currentMo+'-'+dateNow.getDate();
    let movieTimeHr = dateNow.getHours()+1;
    let movieTimeMin = dateNow.getMinutes();

    const adminPage = new AdminPage();

    adminPage.clickViewSchedules();
    adminPage.clickAddMovieSched();
    adminPage.selectCinema(movieDetail.cinema);
    adminPage.selectMovieName(movieDetail.movie);
    adminPage.enterStartDate(movieDate);
    adminPage.enterTimeHour(movieTimeHr.toString());
    adminPage.enterTimeMin(movieTimeMin.toString());
    adminPage.enterMoviePrice(movieDetail.price);
    adminPage.clickAdd();
    adminPage.verifySchedulePageDisplayed();
    cy.wait(500);
});

Cypress.Commands.add('verifyMovieSched', (movieDetail) => { 
    const adminPage = new AdminPage();

    let cinemNum = movieDetail.cinema+1;

    //Select cinema where movie is added
    adminPage.selectCinema(cinemNum);

    //Verify Schedule page is displayed
    adminPage.verifySchedulePageDisplayed();

    //Verify Movie schedule is displayed under cinema
    adminPage.verifyMovieSched(movieDetail.movie);

});
