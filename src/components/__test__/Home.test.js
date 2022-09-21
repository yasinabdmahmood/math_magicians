import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../Home';

it('Check if Item component has changed', () => {
  const tree = renderer.create(
    <Home />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('the component should render a heading element', () => {
  render(
    <Home />,
  );
  const h1 = screen.getByRole('heading');
  expect(h1).toBeInTheDocument();
});
