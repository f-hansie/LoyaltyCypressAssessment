/// <reference types="cypress"/>

import page from '../pages/homepage.cy'
import homepage from "../pages/homepage.cy"


describe('Launch FlyBuys website', function (){

    const page = new homepage()

    it('validate fly buys home page', function(){

        page.visit()
        page.ExtrasMenu()
        page.Search('asdfadsfadsfadsadsf')
        page.Submit()
        
    })
})