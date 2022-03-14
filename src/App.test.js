import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// describe('testing app component', () => {
//   test('renders learn react link', () => {
//     render(<App />);
//     const helloWorldElem = screen.getByText(/hello world/i);
//     const helloNull = screen.queryByText(/hello all/i);
//     const btn = screen.getByRole('button')
//     const input = screen.getByPlaceholderText(/type ur username/i)
 
//     expect(helloWorldElem).toBeInTheDocument();
//     expect(helloNull).toBeNull();
//     expect(btn).toBeInTheDocument();
//     expect(input).toBeInTheDocument();
//   });
//   test('async div appearence', async () => {
//     render(<App />);

//     const helloElem = await screen.findByText(/data/i)
//     expect(helloElem).toBeInTheDocument();
//     expect(helloElem).toHaveStyle({
//       color: 'black',
//       background: 'red'
//     })

//   })
//   test('toggle test', () => {
//     render(<App />)
//     const toggleBtn = screen.getByTestId('toggleBtn')
//     expect(toggleBtn).toBeInTheDocument()
//     expect(screen.queryByTestId('toggleElem')).toBeNull()
//     fireEvent.click(toggleBtn)
//     expect(screen.getByTestId('toggleElem')).toBeInTheDocument()
//     fireEvent.click(toggleBtn)
//     expect(screen.queryByTestId('toggleElem')).toBeNull()
//   })
//   test('input test', () => {
//     render(<App />)
//     const input = screen.getByPlaceholderText(/type ur username/i)
//     const valueElem = screen.getByTestId('valueElem')
//     expect(input).toBeInTheDocument()
//     expect(valueElem).toBeInTheDocument()
//     expect(valueElem).toContainHTML('')
//     fireEvent.input(input, {
//       target: {
//         value: '123123'
//       }
//     })
//     expect(valueElem).toHaveTextContent('123123')
//   })
//   test('input test userEvent', () => {
//     render(<App />)
//     const input = screen.getByPlaceholderText(/type ur username/i)
//     userEvent.type(input, '123')
//     expect(screen.queryByTestId('valueElem')).toHaveTextContent('123')
//   })
// })
