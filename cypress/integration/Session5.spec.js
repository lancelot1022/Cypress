describe('Session 5 Homework', function()
{
    beforeEach( function() {
        cy.visit('http://localhost:4200/login');
        cy.fixture("users.json").as("userDetails");
        cy.fixture("flightDetails.json").as("flightDetails");
    });

    it('Test Case #1', function() {
        cy.login(this.userDetails);
    });

    it('Test Case #2', function() {
        cy.login(this.userDetails);
        cy.createNewLaunch(this.flightDetails);
    });

    it('Test Case #3', function() {
        cy.login(this.userDetails);
        cy.updateLaunch(this.flightDetails);
    });

    it.only('Test Case #4', function() {
        cy.login(this.userDetails);
        cy.logout();
    });
})

