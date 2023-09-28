import React from 'react'

import Button from '../../src/components/Button'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, expect, test } from 'vitest'

describe('<Button />', () => {
  test('it should render a button', () => {
    const { getByText, getByRole } = render(<Button>Click me</Button>)

    expect(getByText('Click me')).toBeInTheDocument()
    expect(getByRole('button')).toBeInTheDocument()
    expect(getByRole('button')).toHaveClass(
      'font-montserrat py-2 px-4 rounded-xl transition-all duration-500 text-white drop-shadow-md disabled:opacity-50 disabled:bg-gray-600 disabled:cursor-not-allowed bg-sky-600 hover:bg-sky-700 text-md w-28'
    )
  })

  test('it should render a button with a primary color', () => {
    const { getByText, getByRole } = render(<Button color="primary">Click me</Button>)

    expect(getByText('Click me')).toBeInTheDocument()
    expect(getByRole('button')).toBeInTheDocument()
    expect(getByRole('button')).toHaveClass(
      'font-montserrat py-2 px-4 rounded-xl transition-all duration-500 text-white drop-shadow-md disabled:opacity-50 disabled:bg-gray-600 disabled:cursor-not-allowed bg-green-600 hover:bg-green-700 text-md w-28'
    )
  })

  test('it should render a button with a secondary color', () => {
    const { getByText, getByRole } = render(<Button color="secondary">Click me</Button>)

    expect(getByText('Click me')).toBeInTheDocument()
    expect(getByRole('button')).toBeInTheDocument()
    expect(getByRole('button')).toHaveClass(
      'font-montserrat py-2 px-4 rounded-xl transition-all duration-500 text-white drop-shadow-md disabled:opacity-50 disabled:bg-gray-600 disabled:cursor-not-allowed bg-red-600 hover:bg-red-700 text-md w-28'
    )
  })

  test('it should render a button with small size', () => {
    const { getByText, getByRole } = render(<Button size="sm">Click me</Button>)

    expect(getByText('Click me')).toBeInTheDocument()
    expect(getByRole('button')).toBeInTheDocument()
    expect(getByRole('button')).toHaveClass(
      'font-montserrat py-2 px-4 rounded-xl transition-all duration-500 text-white drop-shadow-md disabled:opacity-50 disabled:bg-gray-600 disabled:cursor-not-allowed bg-sky-600 hover:bg-sky-700 text-sm w-18'
    )
  })

  test('it should render a button with medium size', () => {
    const { getByText, getByRole } = render(<Button size="md">Click me</Button>)

    expect(getByText('Click me')).toBeInTheDocument()
    expect(getByRole('button')).toBeInTheDocument()
    expect(getByRole('button')).toHaveClass(
      'font-montserrat py-2 px-4 rounded-xl transition-all duration-500 text-white drop-shadow-md disabled:opacity-50 disabled:bg-gray-600 disabled:cursor-not-allowed bg-sky-600 hover:bg-sky-700 text-md w-28'
    )
  })

  test('it should render a button with large size', () => {
    const { getByText, getByRole } = render(<Button size="lg">Click me</Button>)

    expect(getByText('Click me')).toBeInTheDocument()
    expect(getByRole('button')).toBeInTheDocument()
    expect(getByRole('button')).toHaveClass(
      'font-montserrat py-2 px-4 rounded-xl transition-all duration-500 text-white drop-shadow-md disabled:opacity-50 disabled:bg-gray-600 disabled:cursor-not-allowed bg-sky-600 hover:bg-sky-700 text-lg w-32'
    )
  })

  test('it should render a button with primary color and large size', () => {
    const { getByText, getByRole } = render(
      <Button color="primary" size="lg">
        Click me
      </Button>
    )

    expect(getByText('Click me')).toBeInTheDocument()
    expect(getByRole('button')).toBeInTheDocument()
    expect(getByRole('button')).toHaveClass(
      'font-montserrat py-2 px-4 rounded-xl transition-all duration-500 text-white drop-shadow-md disabled:opacity-50 disabled:bg-gray-600 disabled:cursor-not-allowed bg-green-600 hover:bg-green-700 text-lg w-32'
    )
  })
})
