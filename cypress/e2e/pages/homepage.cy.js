class homePage{

    visit(){
        cy.visit("https://www.flybuys.co.nz/")

    }

    ExtrasMenu(){
        const clickExtrasPage = cy.get('#primary_nav_wrapper > nav > ul > li.nav__item.nav__item--deals > a',{ timeout: 30000}).should('be.visible')
        clickExtrasPage.dblclick({ multiple: true })
        return this
    }

    Search(value){
        //cy.url().should('eq', 'https://www.flybuys.co.nz/extras',{timeout:15000})
        cy.location('pathname').should('eq', '/extras',{timeout:20000})
        const searchText = cy.get('#footer_query',{ timeout: 8000 }).should('be.visible').scrollIntoView()
        searchText.type(value).type('{enter}')
        return this
    }

    Submit(){
        const submitBtn = cy.get('body > footer > div > div > section:nth-child(1) > div > form > button',{ timeout: 10000 }).should('be.visible').scrollIntoView()
        submitBtn.click({ multiple: true })
        return this
    }

    Message(){
        const errorMessage = cy.get('div#instant-empty-results-container>div>div>b',{ timeout: 12000 }).should('be.visible').scrollIntoView()
        errorMessage.should('have.text', 'Sorry there are no results ').pause()
    }
}
export default homePage