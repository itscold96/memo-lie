import { cva } from 'class-variance-authority';

export const buttonStyle = cva('button', {
  variants: {
    theme: {
      card: 'h-full   rounded-2xl bg-black text-white',
      filter: 'h-full px-1 rounded-2xl bg-gray-400 text-black',
    },
    size: {
      small: 'text-sm px-2',
      medium: 'text-base px-1',
    },
  },
  compoundVariants: [{ theme: 'card', size: 'medium', className: 'uppercase' }],
  defaultVariants: {
    theme: 'card',
    size: 'medium',
  },
});
