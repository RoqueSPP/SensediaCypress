// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('Board', (body)=> {
    cy.request({
        method: 'Post',
        url: "/boards",
        body: body,
    
    })
        .then(function (response) {
            expect(response.status).to.eql(200)
            cy.log(JSON.stringify(response.body))
           Cypress.env('idBoard', response.body.id)
            cy.log(Cypress.env('id'))
        })


})
Cypress.Commands.add('DeleteBoard',(body) => {
    cy.request({
        method: 'Delete',
        url: "/boards/" + Cypress.env('idBoard'),
        body: body
    })
        .then(function (response) {
            expect(response.status).to.eql(200)
            cy.log(JSON.stringify(response.body))
        })

})
//
Cypress.Commands.add('AtualizarCard', (body) => {
    cy.request({
        method: 'Put',
        url: "/cards/" + Cypress.env('idCard'),
        body: body,
      
    })
        .then(function (response) {
            expect(response.status).to.eql(200)
            cy.log(JSON.stringify(response.body))
            
        })
})
//
Cypress.Commands.add('List', (body) => {
    cy.request({
    method: 'Post',
        url: "/lists",
            body: body,

    })
    .then(function (response) {
        expect(response.status).to.eql(200)
        cy.log(JSON.stringify(response.body))
        Cypress.env('idList', response.body.id)
        cy.log(Cypress.env('idList'))
    })
})
// -- This is a child command --
Cypress.Commands.add('Card', (body) => {
    cy.request({
    method: 'Post',
    url: "/cards",
    body: body,

})
    .then(function (response) {
        expect(response.status).to.eql(200)
        cy.log(JSON.stringify(response.body))
        Cypress.env('idCard', response.body.id)
        cy.log(Cypress.env('idCard'))
    }) })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
Cypress.Commands.add('HomePage', () => {
    cy.visit('https://www.grocerycrud.com/v1.x/demo/bootstrap_theme')
    cy.get('#switch-version-select').select('Bootstrap V4 Theme')
})
Cypress.Commands.add('FillForm', (massage) => {
    cy.get('.floatL.t5 > .btn').click()
    cy.get('#field-customerName').type('Teste Sicredi')
    cy.get('#field-contactLastName').type('Teste')
    cy.get('#field-contactFirstName').type('Roque Pires')
    cy.get('#field-phone').type('51 9999-9999')
    cy.get('#field-addressLine1').type('Av Assis Brasil, 3970')
    cy.get('#field-addressLine2').type('Torre D')
    cy.get('#field-city').type('Porto Alegre')
    cy.get('#field-state').type('RS')
    cy.get('#field-postalCode').type('91000-000')
    cy.get('#field-country').type('Brasil')
    cy.get('#field_salesRepEmployeeNumber_chosen').click()
    cy.get('.chosen-search').type('Fixter')
    cy.get('#field-creditLimit').type('200')
    cy.get('#form-button-save').click()
    cy.get('p').should('have.text', massage)
})
Cypress.Commands.add('FillFormDelite', (massageDelite,massageUser) => {
    cy.get('[href="/v1.x/demo/bootstrap_theme_v4/"]').click()
    cy.get('[placeholder="Search Name"]').type('Teste Sicredi')
    cy.wait(1000)
    cy.get('.select-all-none').click()
    cy.get('.btn > span.text-danger').click()
    cy.get('.alert-delete-multiple').should('have.text', massageDelite)
    cy.get('.delete-multiple-confirmation > .modal-dialog > .modal-content > .modal-footer > .btn-danger').click()
    cy.get('[data-growl="message"] > p').should('have.text', massageUser)

})