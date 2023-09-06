import { ComponentProps } from 'react'

import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'font-montserrat text-lg w-24 py-2 px-4 rounded-xl transition-all duration-500 text-white drop-shadow-md disabled:opacity-50 disabled:bg-gray-600 disabled:cursor-not-allowed',
  variants: {
    color: {
      default: 'bg-sky-600 hover:bg-sky-700',
      primary: 'bg-green-600 hover:bg-green-700',
      secondary: 'bg-red-600 hover:bg-red-700'
    },
    size: {
      sm: 'text-sm w-18',
      md: 'text-md w-28',
      lg: 'text-lg w-32'
    }
  },
  defaultVariants: {
    color: 'default',
    size: 'md'
  }
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export default function Button({ disabled, color, size, className, ...props }: ButtonProps) {
  return (
    <button disabled={disabled} className={button({ color, size, className })} {...props}>
      {props.children}
    </button>
  )
}
