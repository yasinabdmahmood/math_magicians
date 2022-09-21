import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../Navbar';

const MockTodoFooter = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

it('Check if the component has changed', () => {
  const tree = renderer.create(
    <MockTodoFooter />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render three li element', () => {
  render(
    <MockTodoFooter />,
  );
  const listItems = screen.getAllByTestId('li');

  expect(listItems.length).toBe(3);
});
