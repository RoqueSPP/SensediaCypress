
describe('Fazer o cadastro de usuario', () => {
  const massage = 'Your data has been successfully stored into the database. Edit Customer or Go back to list'
  const massageDelite = '\n                                Are you sure that you want to delete those 2 items?                            '
  const massageUser ='Your data has been successfully deleted from the database.'
  it('Cadastro de usurio', function () {

    cy.HomePage()
    cy.FillForm(massage)
  })
  it('Excluindo usuarios de usurio', function () {

    cy.HomePage()
    cy.FillForm(massage)
    cy.FillFormDelite(massageDelite,massageUser)
    



  })

})