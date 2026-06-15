describe('Test du composant Chiffre de César', () => {
  beforeEach(() => {
    cy.visit('../../app/ceasar/index.html'); 
  });

  it('devrait chiffrer correctement Hello World! avec une clé de 6', () => {
    // 1. Automatiser la complétion du formulaire
    cy.get('#key').clear().type('6');
    cy.get('#text').clear().type('Hello World!');

    // 2. Automatiser la validation du formulaire
    cy.get('#cypher-btn').click();

    // 3. Vérifier l'affichage du bon résultat
    cy.get('#output').should('have.text', 'Nkrru Cuxrj!');
  });
});