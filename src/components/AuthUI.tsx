import { Link } from 'react-router'
import Button from './common/Button'
import { cn } from '@/utils'
import Input from './common/Input'
import type { ComponentProps } from 'react'
import Badge from './common/Badge'

function AuthContainer({ className, children, ...props }) {
  return (
    <section
      className={cn('w-112 rounded-lg bg-white px-6 py-8 shadow-sm', className)}
      {...props}
    >
      {children}
    </section>
  )
}

function AuthTitle({ className, children, ...props }) {
  return (
    <h1
      className={cn(
        'w-full text-center text-[30px] leading-9 font-bold text-gray-900',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
}

function AuthDescription({ className, children, ...props }) {
  return (
    <span
      className={cn('text-sm font-normal text-gray-600', className)}
      {...props}
    >
      {children}
    </span>
  )
}

function AuthLink({ path, className, children, ...props }) {
  return (
    <Link to={path} className={cn('text-primary-600', className)} {...props}>
      {children}
    </Link>
  )
}

function AuthSubmitButton({ isDisabled, className, children, ...props }) {
  return (
    <Button
      variant={isDisabled ? 'secondary' : 'primary'}
      className={className}
      {...props}
    >
      {children}
    </Button>
  )
}

function AuthVerifyButton({ isDisabled, className, children, ...props }) {
  return (
    <Button
      variant="outline"
      className={cn(
        'border border-solid',
        isDisabled
          ? 'border-[#bdbdbd] bg-gray-200'
          : 'bg-primary-100 border-primary-500 text-primary-500',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}

function AuthSocialLoginButton({ className, children, ...props }) {
  return (
    <Button className={className} {...props}>
      {children}
    </Button>
  )
}

function AuthInput({ className, ...props }: ComponentProps<'input'>) {
  return <Input className={className} {...props} />
}

function AuthBadge({ isSelected, className, children, ...props }) {
  return (
    <Badge
      size="lg"
      className={cn(
        'px-7 py-4',
        isSelected
          ? 'bg-primary-100 border-primary-500 text-primary-500'
          : 'border-[#bdbdbd] bg-gray-200',
        className
      )}
      {...props}
    >
      {children}
    </Badge>
  )
}

export {
  AuthContainer,
  AuthTitle,
  AuthDescription,
  AuthLink,
  AuthSubmitButton,
  AuthVerifyButton,
  AuthSocialLoginButton,
  AuthInput,
  AuthBadge,
}
