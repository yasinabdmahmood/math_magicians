import { render, screen ,fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from '../../App';
 
const MockApp = () => {
    return (
        <BrowserRouter>
          <App />
        </BrowserRouter>
    )
}

it ("Check if the component has changed", () => {
    const tree = renderer.create(
        <MockApp />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
describe('test the routing functionality',()=>{
    it(' home page should be visible initially ', () => {
        render(
            <MockApp />
        );
        const homePage = screen.getByTestId('home-page');
         
       expect(homePage).toBeVisible();
       
    });

    it('Calculator  page should be visible after clicking on the Calculator link', () => {
        render(
            <MockApp />
        );
        const calculatorLink = screen.getByText("Calculator");
       
        fireEvent.click(calculatorLink)

        const calculatorPage = screen.getByTestId('calculator-page');
         
       expect(calculatorPage).toBeVisible();
       
    });
    it('Quote  page should be visible after clicking on the Quote link', () => {
        render(
            <MockApp />
        );
        const quoteLink = screen.getByText("Quote");
       
        fireEvent.click(quoteLink)

        const quotePage = screen.getByTestId('quote-page');
         
       expect(quotePage).toBeVisible();
       
    });
})
