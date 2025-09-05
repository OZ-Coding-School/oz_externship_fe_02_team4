import { cn } from '@/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const logoVariants = cva('font-bold', {
  variants: {
    size: {
      md: 'text-heading4',
      lg: 'text-[2rem]',
    },
    color: {
      primary: 'text-primary-600',
      black: 'text-black',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
})

export const Logo = ({ size, color }: VariantProps<typeof logoVariants>) => {
  return <div className={cn(logoVariants({ size, color }))}>StudyHub</div>
}
