import { screen } from "@testing-library/react"

import userEvent from "@testing-library/user-event";
import {renderWithRouterAndStore} from '../../test/helpers/renderWithRouterAndStore'

describe('Counter component', () => {
    test('counter test', async () => {
        renderWithRouterAndStore(null)
        const incrementBtn = screen.getByTestId('increment-btn')
        const valueTitle = screen.getByTestId('value-title')
        expect(incrementBtn).toBeInTheDocument()
        userEvent.click(incrementBtn)
        expect(valueTitle).toHaveTextContent('11')
    })
})