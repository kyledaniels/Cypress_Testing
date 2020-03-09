// describe('Browser Actions',()=>{
//     it('Should load correct url',()=>{
//         cy.visit('http://example.com', {timewout:1000})
//     })

//     it('Should check correct url', ()=>{
//         cy.url().should('include', 'example.com')
//     })

//     it("should wait for 3 seconds",()=>{
//         cy.wait(3000)
//     })

//     it('should pause the execution', ()=>{
//         cy.pause()
//     })
    
//     it('should check for current element on the page', ()=>{
//         cy.get('h1').should('be.visible')
//     })
// })

describe('Browser Action',()=>{
    it('should load url',()=>{
        cy.visit('http://books.toscrape.com/index.html',{timeout:3000})
        cy.url().should('include','index.html')
    })

    it('should click on travel category',()=>{
        cy.get('a')
        .contains('Travel')
        .click()
        cy.get('h1').contains('Travel')
    })
   it('should count number of books',()=>{
       cy.get('.product_pod').its('length').should('eq',11)
   })


    it('should click on poetry link',()=>{
        cy.get('a').contains('Poetry').click()
    })

    it('should click on book title',()=>{
        cy.get('a').contains('Olio').click()
    })

    it('should contain price of book',()=>{
        cy.get('.price_color').contains('£23.88')
    })
})
