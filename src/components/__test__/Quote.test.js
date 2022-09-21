import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quote from "../Quote"

it ("Check if Item component has changed", () => {
    const tree = renderer.create(
        <Quote />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});


    it('the component should render a div with class quote-container', () => {
        render(
            <Quote/>
        );
        const div = screen.getByTestId("quote-page");
        expect(div).toHaveClass('quote-container');
       
    });
   