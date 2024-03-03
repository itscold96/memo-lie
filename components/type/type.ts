import { VariantProps } from 'class-variance-authority';
import { buttonStyle } from '@/components/style/styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyle> {}
