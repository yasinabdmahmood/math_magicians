import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from "../Calculator"

it ("Check if the component has changed", () => {
    const tree = renderer.create(
        <Calculator />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('should get 6  for (1+2)*2', () => {
    render(
        <Calculator />
    );
    const display = screen.getByTestId("display");
     const one = screen.getByText("1");
     const two = screen.getByText("2");
     const plus = screen.getByText("+");
     const multiply = screen.getByText("x");
     const equal = screen.getByText("=");
     fireEvent.click(one)
     fireEvent.click(plus)
     fireEvent.click(two)
     fireEvent.click(multiply)
     fireEvent.click(two)
     fireEvent.click(equal)
    expect(display).toHaveTextContent("6");
   
});

