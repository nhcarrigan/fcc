describe('test_name', function () {
  it('what_it_does', function () {
    cy.viewport(1706, 1225);

    cy.visit(
      'https://8000-azure-mule-w1x3dedo.ws-eu17.gitpod.io/learn/quality-assurance/quality-assurance-and-testing-with-chai/test-if-a-variable-or-function-is-defined'
    );

    cy.get(
      'header > #universal-nav > .universal-nav-middle > #universal-nav-logo > svg'
    ).click();

    cy.get('.map-ui > ul > li:nth-child(6) > .btn > div').click();

    cy.get(
      '.block-ui > .block > .map-challenges-ul > #learn-how-javascript-assertions-work > a'
    ).click();

    cy.get(
      '#dynamic-front-end-form > div > .col-xs-12 > .form-group > #solution'
    ).click();

    cy.get(
      '#dynamic-front-end-form > div > .col-xs-12 > .form-group > #solution'
    ).type('https://boilerplate-mochachai-2.qause.repl.co');

    cy.get('.row > .col-md-8 > #dynamic-front-end-form > div > .btn').click();

    cy.get(
      '.in > .challenge-success-modal > .modal-content > .modal-footer > .btn'
    ).click();
  });
});
