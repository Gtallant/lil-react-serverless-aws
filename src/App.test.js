import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero component', async () => {
  render(<App />);
  const componentTitle = await screen.findByText('Griffin Tallant');
  expect(componentTitle).toBeInTheDocument();
});

test('renders experience component', async () => {
  render(<App />);
  const componentTitle = await screen.findByText('Work Experience');
  expect(componentTitle).toBeInTheDocument();
});

test('renders skills component', async () => {
  render(<App />);
  const componentTitle = await screen.findByText('Skills');
  expect(componentTitle).toBeInTheDocument();
});

test('renders certifications component', async () => {
  render(<App />);
  const componentTitle = await screen.findByText('Certifications and Awards');
  expect(componentTitle).toBeInTheDocument();
});

test('renders education component', async () => {
  render(<App />);
  const componentTitle = await screen.findByText('Education');
  expect(componentTitle).toBeInTheDocument();
});

test('renders footer component', async () => {
  render(<App />);
  const componentTitle = await screen.findByText('Contact');
  expect(componentTitle).toBeInTheDocument();
});
