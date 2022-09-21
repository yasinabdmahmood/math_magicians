import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from "../Home"

it ("Check if Item component has changed", () => {
    const tree = renderer.create(
        <Home />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});


    it('the button should have class item', () => {
        render(
            <Home/>
        );
        const h1 = screen.getByRole("heading");
        expect(h1).toBeInTheDocument();
       
    });
   