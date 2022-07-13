declare global {
    namespace Cypress {
      interface Chainable<Subject> {
        register(value: any): Chainable<Element>;
        login(value: any): Chainable<Element>;
        logout(): Chainable<Element>;
        verifyMenuTabs(): Chainable<Element>;
        verifyEmailInMenu(value: any): Chainable<Element>;
        addbranch(value: string, value2: string): Chainable<Element>;
        verifyCreatedBranch(value: string): Chainable<Element>;
        addCinema(value: string): Chainable<Element>;
        verifyCinema(value: string): Chainable<Element>;
        addMovie(value: any): Chainable<Element>;
        verifyMovieSched(value: any): Chainable<Element>;
      }
    }
  }

export {}