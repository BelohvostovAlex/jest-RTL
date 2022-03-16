import {screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithRouterAndStore } from '../../test/helpers/renderWithRouterAndStore'
import { Navbar } from './Navbar'

describe('navbar', () => {
    test('mainLink testing', () => {
        renderWithRouterAndStore(<Navbar />)
        const mainLink = screen.getByTestId('main-link')
        expect(mainLink).toBeInTheDocument()
        userEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    })
    test('aboutLink testing', () => {
        renderWithRouterAndStore(<Navbar />)
        const aboutLink = screen.getByTestId('about-link')
        expect(aboutLink).toBeInTheDocument()
        userEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
    })
    test('usersLink testing', () => {
        renderWithRouterAndStore(<Navbar />)
        const usersLink = screen.getByTestId('users-link')
        expect(usersLink).toBeInTheDocument()
        userEvent.click(usersLink)
        expect(screen.getByTestId('users-page')).toBeInTheDocument()
    })
})