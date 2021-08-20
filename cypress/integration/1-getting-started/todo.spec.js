describe('Form App',()=>{
  beforeEach(() =>{
      cy.visit('http://localhost:3000/pizza')
  })

  const nameInput = () => cy.get('input[name=name]')
  const specialInput =() => cy.get('input[name=special]')
  const sauceInput = () => cy.get('input [name =sauce]')
  const submitBtn = () => cy.get('button[id="submit"]')

  it('Sanity check to make sure that tests work', () => {
    // "it" is a test
    // "expect" is an assertion
    expect(1 + 2).to.equal(3)
    expect(2 + 2).not.to.equal(5)
    expect({}).not.to.equal({}) // equal ie ===
    expect({}).to.eql({}) // eql ie ==
})
// test that you can add text to the box
// test that you can select multiple toppings
// test that you can submit the form
describe('Filling out and submitting the form', () => {

  it('Adding text to the boxes', () =>{
    nameInput().type('Billy Myers')
    specialInput().type('Extra sauce')
    
  })

  it('Selecting mulitple toppings & selecting sauce', ()=>{
    cy.get('input[type="checkbox"]').check();
    cy.get('[type="radio"]').first().check() 
  })

  it('Selecting a size', () => {
    cy.get('select[name="size"]').select('Medium')
  })

it('Attempting to submit the order and checking if button allows submission', () => {
  nameInput().type('Billy Myers')
  specialInput().type('Extra sauce')
  cy.get('select[name="size"]').select('Medium')
  cy.get('input[type="checkbox"]').check();
  cy.get('[type="radio"]').first().check() 
  submitBtn().should('be.enabled')
  submitBtn().click();
})


})


})