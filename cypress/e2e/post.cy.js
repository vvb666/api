    
describe('api post', () => {
    it('Rq', () => {

        cy.fixture('tur').then((isfixtyr)=>{
            const requestBody=isfixtyr;

            cy.request ({
                method:'POST',
                url:'http://restapi.adequateshop.com/api/Tourist',
                body:requestBody



            })
            .then((response)=>{
                expect(response.status).to.eq(201)
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
                expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
                

            })
                
                
            
                





        })


    })


})