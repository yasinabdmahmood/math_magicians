import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Item from '../Item';

const mockFunction = jest.fn;
it('Check if Item component has changed', () => {
  const tree = renderer.create(
    <Item label="AC" cl="light-gray" handleObjectChange={mockFunction} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('check the input props and its effect on the component', () => {
  it('the button should have class item', () => {
    render(
      <Item label="AC" cl="light-gray" handleObjectChange={mockFunction} />,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('item');
  });
  it('the button should have class light-gray', () => {
    render(
      <Item label="AC" cl="light-gray" handleObjectChange={mockFunction} />,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('light-gray');
  });
  it('the button should have text  AC ', () => {
    render(
      <Item label="AC" cl="light-gray" handleObjectChange={mockFunction} />,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('AC');
  });
});
