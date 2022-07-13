import HomePage from "../pages/HomePageModel";
import BranchPage from "../pages/BranchesPageModel";

describe('Cypress Final Project', function()
{
    beforeEach( function() {
        cy.visit('http://magenicmovies.azurewebsites.net/');
        cy.fixture("users.json").as("userDetails");
        cy.fixture("branchDetails.json").as("branchDetails");
        cy.fixture("cinemaDetails.json").as("cinemaDetails");
        cy.fixture("movieDetails.json").as("movieDetails");
    });

    it('Test Case #1', function() {
        //Register
        cy.register(this.userDetails);

        //Login
        cy.login(this.userDetails);

        //Verify Menu Tabs
        cy.verifyMenuTabs();

        //Verify Email in navigation
        cy.verifyEmailInMenu(this.userDetails);

        //Logout
        cy.logout();
    });

    it('Test Case #2', function() {
        const homePage = new HomePage();
        const branchPage = new BranchPage();

        //Navigate to Login
        let loginPage = homePage.clickLogin()
            .navigateToLogin();
        loginPage.isDisplayed();

        //Login
        cy.login(this.userDetails);

        //Navigate to Admin page
        let adminPage = homePage.clickAdmin()
            .navigateToAdmin()
        adminPage.isDisplayed();

        //Select Branch Module
        adminPage.selectModule('Branch');

        //Verify existing branches
        adminPage.verifyBranchDisplayed();

        //Add 1st branch
        cy.addbranch(this.branchDetails.branchName1, this.branchDetails.address1);
        //Verify created branch
        cy.verifyCreatedBranch(this.branchDetails.branchName1);

        //Add 2nd branch
        cy.addbranch(this.branchDetails.branchName2, this.branchDetails.address2);
        //Verify created branch
        cy.verifyCreatedBranch(this.branchDetails.branchName2);

        //Navigate to Branches
        homePage.clickBranches();
        branchPage.isDisplayed();

        //Verify created branches
        branchPage.verifyNewBranch(this.branchDetails.branchName1);
        branchPage.verifyNewBranch(this.branchDetails.branchName2);
    });

    it('Test Case #3', function() {
        const homePage = new HomePage();

        //Navigate to Login
        let loginPage = homePage.clickLogin()
            .navigateToLogin();
        loginPage.isDisplayed();

        //Login
        cy.login(this.userDetails);

        //Navigate to Admin page
        let adminPage = homePage.clickAdmin()
            .navigateToAdmin()
        adminPage.isDisplayed();

        //Select Branch Module
        adminPage.selectModule('Branch');

        //Select random branch and click Title
        adminPage.selectRandomBranch();

        //Add cinema
        cy.addCinema(this.cinemaDetails.cinemaName);

        //Verify added cinema in branch page and View Schedule dropdown
        cy.verifyCinema(this.cinemaDetails.cinemaName);

    });

    it('Test Case #4', function() {
        const homePage = new HomePage();

        //Navigate to Login
        let loginPage = homePage.clickLogin()
            .navigateToLogin();
        loginPage.isDisplayed();

        //Login
        cy.login(this.userDetails);

        //Navigate to Admin page
        let adminPage = homePage.clickAdmin()
            .navigateToAdmin()
        adminPage.isDisplayed();

        //Select Branch Module
        adminPage.selectModule('Branch');

        //Select random branch and click Title
        adminPage.selectRandomBranch();

        //Verify existing cinema and add if it is less than 3 
        adminPage.countAndAddCinema(this.cinemaDetails.cinemaName);

        //Add movie sched to cinema
        cy.addMovie(this.movieDetails);

        //Verify added movie sched
        cy.verifyMovieSched(this.movieDetails);

        //Navigate to Movies tab
        homePage.clickMovies();

        //Verify added movie is displayed
        homePage.verifyMovie(this.movieDetails.movie);
    });
})