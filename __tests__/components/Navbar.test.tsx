import React from 'react'

import Navbar from '../../src/components/Navbar'

import { render } from '@testing-library/react'
import { describe, test } from 'vitest'
import '@testing-library/jest-dom'

describe('<Navbar>', () => {
  test('should render a navbar', () => {
    const { getByText, getByRole } = render(<Navbar />)

    expect(getByRole('navigation')).toBeInTheDocument()
    expect(getByText('Formulário')).toBeInTheDocument()
    expect(getByText('Empresas')).toBeInTheDocument()

    expect(getByText('Formulário')).toHaveAttribute('href', '/forms')
    expect(getByText('Empresas')).toHaveAttribute('href', '/companies')
  })
})
