import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra el nombre y las secciones principales', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Jonathan Andres Oviedo Chalacan');
  expect(screen.getByRole('heading', { name: 'Proyectos' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Experiencia' })).toBeInTheDocument();
});
