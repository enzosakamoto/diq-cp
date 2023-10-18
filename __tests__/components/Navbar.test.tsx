import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from '../../src/components/Navbar'

import { render } from '@testing-library/react'
import { describe, test } from 'vitest'

import '@testing-library/jest-dom'

describe('<Navbar />', () => {
  test('it should render a navbar', () => {
    const { getAllByText, getByRole } = render(
      <Router>
        <Navbar />
      </Router>
    )

    expect(getByRole('navigation')).toBeInTheDocument()

    expect(getAllByText('Formulário')[0]).toBeInTheDocument()
    expect(getAllByText('Empresas')[0]).toBeInTheDocument()

    expect(getAllByText('Formulário')[0]).toHaveAttribute('href', '/forms')
    expect(getAllByText('Empresas')[0]).toHaveAttribute('href', '/companies')

    expect(getAllByText('Formulário')[1]).toBeInTheDocument()
    expect(getAllByText('Empresas')[1]).toBeInTheDocument()

    expect(getAllByText('Formulário')[1]).toHaveAttribute('href', '/forms')
    expect(getAllByText('Empresas')[1]).toHaveAttribute('href', '/companies')
  })
})
