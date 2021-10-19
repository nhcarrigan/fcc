declare namespace Cypress {
  interface Chainable<Subject> {
    login(): Chainable<any>;
    toggleAll(): Chainable<any>;
    resetUsername(): Chainable<any>;
  }
}
