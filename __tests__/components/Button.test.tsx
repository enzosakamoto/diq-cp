import React from 'react'

import Button from '../../src/components/Button'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, expect, test } from 'vitest'

describe('<Button>', () => {
  it('should render a button', () => {
    const { getByText, getByRole } = render(<Button>Click me</Button>)

    expect(getByText('Click me')).toBeInTheDocument()
    expect(getByRole('button')).toBeInTheDocument()
  })

  // it('should render a button with a primary color', () => {
  //   const { getByText } = render(<Button color="primary">Click me</Button>)

  //   expect(getByText('Click me')).toBeInTheDocument()
  //   expect(getByText('Click me')).toHaveClass(
  //     'font-medium w-24 py-2 px-4 rounded transition-all duration-500 text-white drop-shadow-md bg-green-600 hover:bg-green-700'
  //   )
  // })

  // it('should render a button with a secondary color', () => {
  //   const { getByText } = render(<Button color="secondary">Click me</Button>)

  //   expect(getByText('Click me')).toBeInTheDocument()
  //   expect(getByText('Click me')).toHaveClass(
  //     'font-medium w-24 py-2 px-4 rounded transition-all duration-500 text-white drop-shadow-md bg-red-600 hover:bg-red-700'
  //   )
  // })

  // it('should render a button with a custom className', () => {
  //   const { getByText } = render(<Button className="bg-yellow-600">Click me</Button>)

  //   expect(getByText('Click me')).toBeInTheDocument()
  //   expect(getByText('Click me')).toHaveClass(
  //     'font-medium w-24 py-2 px-4 rounded transition-all duration-500 text-white drop-shadow-md bg-yellow-600'
  //   )
  // })

  // it('should render a button with a disabled state', () => {
  //   const { getByText } = render(<Button disabled>Click me</Button>)

  //   expect(getByText('Click me')).toBeInTheDocument()
  //   expect(getByText('Click me')).toBeDisabled()
  //   expect(getByText('Click me')).toHaveClass(
  //     'font-medium w-24 py-2 px-4 rounded transition-all duration-500 text-white drop-shadow-md bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:bg-gray-600 disabled:cursor-not-allowed'
  //   )
  // })

  // it('should render a button with a disabled state and a custom className', () => {
  //   const { getByText } = render(
  //     <Button disabled className="bg-yellow-600">
  //       Click me
  //     </Button>
  //   )

  //   expect(getByText('Click me')).toBeInTheDocument()
  //   expect(getByText('Click me')).toBeDisabled()
  //   expect(getByText('Click me')).toHaveClass(
  //     'font-medium w-24 py-2 px-4 rounded transition-all duration-500 text-white drop-shadow-md bg-yellow-600 disabled:opacity-50 disabled:bg-gray-600 disabled:cursor-not-allowed'
  //   )
  // })

  // it('should render a button with a disabled state and a custom color', () => {
  //   const { getByText } = render(
  //     <Button disabled color="secondary">
  //       Click me
  //     </Button>
  //   )

  //   expect(getByText('Click me')).toBeInTheDocument()
  //   expect(getByText('Click me')).toBeDisabled()
  //   expect(getByText('Click me')).toHaveClass(
  //     'font-medium w-24 py-2 px-4 rounded transition-all duration-500 text-white drop-shadow-md bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:bg-gray-600 disabled:cursor-not-allowed'
  //   )
  // })

  // it('should render a button with a custom className and a custom color', () => {
  //   const { getByText } = render(
  //     <Button className="bg-yellow-600" color="secondary">
  //       Click me
  //     </Button>
  //   )

  //   expect(getByText('Click me')).toBeInTheDocument()
  //   expect(getByText('Click me')).toHaveClass(
  //     'font-medium w-24 py-2 px-4 rounded transition-all duration-500 text-white drop-shadow-md hover:bg-red-700 bg-yellow-600'
  //   )
  // })

  // it('should render a button with a custom className and a custom color and a disabled state', () => {
  //   const { getByText } = render(
  //     <Button className="bg-yellow-600" color="secondary" disabled>
  //       Click me
  //     </Button>
  //   )

  //   expect(getByText('Click me')).toBeInTheDocument()
  //   expect(getByText('Click me')).toBeDisabled()
  //   expect(getByText('Click me')).toHaveClass(
  //     'font-medium w-24 py-2 px-4 rounded transition-all duration-500 text-white drop-shadow-md bg-yellow-600 hover:bg-red-700 disabled:opacity-50 disabled:bg-gray-600 disabled:cursor-not-allowed'
  //   )
  // })
})
