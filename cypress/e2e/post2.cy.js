

describe('api post', () => {
    it('Rs', () => {

        const requestBody={
            tourist_name: Math.random().toString(5).substring(2),
            tourist_email: Math.random().toString(5).substring(2)+"@gmail.com",
            tourist_location: "Russia"

          }
        

            cy.request ({
                method:'POST',
                url:'http://restapi.adequateshop.com/api/Tourist',
                body:requestBody



            })
            .then((response)=>{
                expect(response.status).to.equal(201)
                expect(response.body.tourist_name).to.equal(requestBody.tourist_name)
                expect(response.body.tourist_email).to.equal(requestBody.tourist_email)
                expect(response.body.tourist_location).to.equal(requestBody.tourist_location)
                

            })
                
                
            
                





        })


 })

