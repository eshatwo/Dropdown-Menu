import { render, screen } from '@testing-library/react';
import DropdownMenu from './Dropdown_Menu';

test('renders learn react link', () => {
  render(<DropdownMenu />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
