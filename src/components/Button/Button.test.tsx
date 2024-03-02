import React from 'react'
import { getAllByAltText, getByText, render, screen } from '@testing-library/react'

import { Button } from './Button'

describe("Button", () => {
  render(<Button color='primary' label='Button' size='medium' />)
  test('It should render the button', () => {
    const element = screen.getAllByText('Button')
    expect(element).toBeDefined()
    })

}


)
