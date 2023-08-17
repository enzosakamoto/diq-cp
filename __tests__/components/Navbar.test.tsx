import React from 'react'

import Navbar from '../../src/components/Navbar'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('<Navbar>', () => {
  it('should render a navbar', () => {
    const { getByText, getByRole } = render(<Navbar />)

    expect(getByRole('navigation')).toBeInTheDocument()
    expect(getByText('Home')).toBeInTheDocument()
    expect(getByText('Api')).toBeInTheDocument()

    expect(getByText('Home')).toHaveAttribute('href', '/')
    expect(getByText('Api')).toHaveAttribute('href', '/api')

    expect(getByRole('navigation')).toHaveClass(
      'w-full fixed flex flex-row justify-center items-center bg-cyan-800 py-4 gap-8 drop-shadow-md'
    )
    expect(getByText('Home')).toHaveClass(
      'transform text-2xl text-white transition-all duration-500 hover:scale-105'
    )
    expect(getByText('Api')).toHaveClass(
      'transform text-2xl text-white transition-all duration-500 hover:scale-105'
    )
  })
})
