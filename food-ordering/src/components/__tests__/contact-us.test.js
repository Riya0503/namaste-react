import { render, screen } from "@testing-library/react"
import ContactUs from "../Contact-us";
import "@testing-library/jest-dom"


// describe is used for grouping different test cases. 
describe("Contact us page test Case", () => {
    //we can use test or it both are same it is just alias for test
    test("Should load contact us component heading" , () => {

        //when testing loading of component we need to first render the component to the JS dom
        render(<ContactUs/>);
    
        //for checking if component is rendered or not we will check if heading is loaded or not
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })
    
    it("should load contact us component button", () => {
        render(<ContactUs/>)
    
        // const button = screen.getByRole("button");
        // expect(button).toBeInTheDocument()
    
        const buttonText = screen.getByText("Submit")    
        expect(buttonText).toBeInTheDocument()
    
    })
    
    describe('Contact us input', () => { 
        test("should load contact us input name", () => {
            render(<ContactUs/>)
            const inputName = screen.getByPlaceholderText("name")
            expect(inputName).toBeInTheDocument();
        })
        
        test("should load contact us 2 input boxes", () => {
            render(<ContactUs/>);
            const inputBoxes = screen.getAllByRole("textbox");
            expect(inputBoxes.length).toBe(2)
        })
    })
})














