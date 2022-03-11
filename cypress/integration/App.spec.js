describe('crypto-market e2e testing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });
    it('go to exchange list page and navigate', () => {
        cy.get('.page-item.active').find('button').should('have.text', 1);
        cy.get('li.page-item:nth-child(3)').find('button').click();
        cy.get('.page-item.active').find('button').should('have.text', 2);
    });
    it('navigate to detail page and go back', () => {
        cy.get('tbody tr:nth-child(1)').click();
        cy.get('button.btn-primary').should('have.text', 'Go back');
        cy.get('button.btn-primary').click();
        cy.get('.page-item.active').find('button').should('have.text', 1);
    });
});
