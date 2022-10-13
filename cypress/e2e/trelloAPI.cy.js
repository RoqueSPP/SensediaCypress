

describe('desafio Trello', function () {

    it('Criar um Board', function () {
        var body = {
            name: 'Teste Board',
            key: '25457a572e044cb6c87590a29102b6a7',
            token: '735b0a34720094cac35691499e350a5f0db05a3300048c3b248deba8ef1efcaa'
        }
        cy.Board(body)
    })

    it('Criar uma List', function () {
        var body = {
            name: 'Teste List',
            key: '25457a572e044cb6c87590a29102b6a7',
            token: '735b0a34720094cac35691499e350a5f0db05a3300048c3b248deba8ef1efcaa',
            idBoard: Cypress.env('idBoard')
        }
        cy.List(body)
    })
    it('Criar um Card', function () {
        var body = {
            name: 'Teste Card',
            key: '25457a572e044cb6c87590a29102b6a7',
            token: '735b0a34720094cac35691499e350a5f0db05a3300048c3b248deba8ef1efcaa',
            idList: Cypress.env('idList')
        }
        cy.Card(body)
    })

    it('Criar uma Atualizar Card', function () {
        var body = {
            name: "👋 What? Why? How?",
            url: "https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how",
            shortLink: "H0TZyzbK",
            shortUrl: "https://trello.com/c/H0TZyzbK",
            subscribed: false,
            url: "https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how",
            cover: {
                color: "yellow",
                idUploadedBackground: false,
                size: "normal",
                brightness: "light",
                isTemplate: false
            },
            key: '25457a572e044cb6c87590a29102b6a7',
            token: '735b0a34720094cac35691499e350a5f0db05a3300048c3b248deba8ef1efcaa'
        }
        cy.AtualizarCard(body)

    })
    // it('Deletar o Board', function () {
    //     var body = {

    //         key: '25457a572e044cb6c87590a29102b6a7',
    //         token: '735b0a34720094cac35691499e350a5f0db05a3300048c3b248deba8ef1efcaa'

    //     }
    //     cy.DeleteBoard(body)

    // })
})
