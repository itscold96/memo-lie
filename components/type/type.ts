import { VariantProps } from 'class-variance-authority';
import { buttonStyle } from '@/components/style/styles';

export interface DefaultProps {
  content: string;
  className: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyle> {}
