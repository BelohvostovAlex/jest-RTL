import { render, screen } from '@testing-library/react';
import App from './App';

describe('testing app component', () => {
  test('renders learn react link', () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/hello world/i);
    const helloAllElem = screen.queryByText(/hello all/i);
    const btn = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/type ur username/i)
 
    expect(helloWorldElem).toBeInTheDocument();
    expect(helloAllElem).toBeNull();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();

  });
  test('async div appearence', async () => {
    render(<App />);
    screen.debug()
    const helloElem = await screen.findByText(/data/i)
    expect(helloElem).toBeInTheDocument();
    screen.debug()
  })
})
