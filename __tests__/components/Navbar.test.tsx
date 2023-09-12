import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from '../../src/components/Navbar'

import { render } from '@testing-library/react'
import { describe, test } from 'vitest'

import '@testing-library/jest-dom'

describe('<Navbar />', () => {
  test('it should render a navbar', () => {
    const { getByText, getByRole } = render(
      <Router>
        <Navbar />
      </Router>
    )

    expect(getByRole('navigation')).toBeInTheDocument()
    expect(getByRole('navigation')).toHaveClass(
      'fixed flex w-full flex-row items-center justify-between gap-8 bg-transparent px-8 py-4 font-montserrat drop-shadow-md'
    )
    expect(getByText('Formulário')).toBeInTheDocument()
    expect(getByText('Empresas')).toBeInTheDocument()

    expect(getByText('Formulário')).toHaveAttribute('href', '/forms')
    expect(getByText('Empresas')).toHaveAttribute('href', '/companies')
  })
})
