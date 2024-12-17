import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByText("Read our docs")

    expect(heading).toBeInTheDocument()
})