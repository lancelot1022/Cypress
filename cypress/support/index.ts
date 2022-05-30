declare global {
    namespace Cypress {
      interface Chainable<Subject> {
        login(value: any): Chainable<Element>;
        createNewLaunch(value: any): Chainable<Element>;
        updateLaunch(value: any): Chainable<Element>;
        logout(): Chainable<Element>;
      }
    }
  }

export {}