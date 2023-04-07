describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://cw-dev.alphaorimarine.com/ui/')
    cy.contains('SERVERS')
    cy.wait(6000)
    cy.get('[href="/ui/servers/"] > .menu-item-icon').click();
    cy.get('[href="/ui/jobs/"] > .menu-item-icon').click();
    cy.get(':nth-child(3) > [style="margin-top: 5px;"] > .input-group > .form-control').type('9803364{enter}');
    cy.get('tbody > :nth-child(1) > :nth-child(3)').should('have.text', '9803364_8193395d-94c4-4d0e-a980-36781a7f50d5');
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Note that getMonth() returns a zero-based index
    const day = currentDate.getDate();
    const todaysDate = `${year}-${month}-${day}`;
    cy.log(`Today's date is ${todaysDate}`);
  
  
  })
})