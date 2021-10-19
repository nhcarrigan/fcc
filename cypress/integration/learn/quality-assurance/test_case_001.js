describe('test_name', function () {
  it('what_it_does', function () {
    cy.viewport(1717, 848);

    cy.visit('https://8000-azure-mule-w1x3dedo.ws-eu17.gitpod.io/learn');

    cy.get(
      'header > #universal-nav > .universal-nav-middle > #universal-nav-logo > svg'
    ).click();

    cy.get('.map-ui > ul > li:nth-child(6) > .btn > div').click();

    cy.get(
      '.block-ui > .block > .map-challenges-ul > #learn-how-javascript-assertions-work > a'
    ).click();
  });
});
