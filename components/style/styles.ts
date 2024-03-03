import { cva } from 'class-variance-authority';

export const buttonStyle = cva('button', {
  variants: {
    mode: {
      card: 'h-full   rounded-2xl bg-black text-white',
      filter: 'h-full px-1 rounded-2xl bg-gray-400 text-black',
      hashtag: 'rounded-2xl bg-blue-200 px-[0.3rem] ',
    },
    size: {
      small: 'text-sm px-2',
      medium: 'text-base px-1',
    },
  },
  compoundVariants: [{ mode: 'card', size: 'medium', className: 'uppercase' }],
  defaultVariants: {
    mode: 'card',
    size: 'medium',
  },
});
