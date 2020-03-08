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
})
