import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import { Mail, Search } from 'lucide-react'

const inputStyle = cva(
  'w-full rounded-lg p-1 py-[13px] text-sm ring outline-none placeholder:text-gray-400 focus:border-none',
  {
    variants: {
      isError: {
        true: 'ring-[#fca5a5]',
        false:
          'ring-gray-300 focus:ring-primary-500 focus:border-none focus:ring-2',
      },
      hasIcon: {
        true: 'pl-10 pr-[17px]',
        false: 'px-[17px]',
      },
    },
  }
)

const errorMessageStyle = cva('text-sm', {
  variants: {
    isError: {
      true: 'block text-danger-600',
      false: 'hidden',
    },
  },
})

interface InputProps {
  isError?: boolean
  icon?: string | null
}

function Input({ isError = false, icon }: InputProps) {
  return (
    <label className="flex flex-col gap-2">
      <div className="flex gap-1 text-sm font-medium">
        <span className="color-gray-700">이름</span>
        <span className="text-danger-500">*</span>
      </div>

      <div className="relative">
        {icon === 'search' && (
          <Search className="absolute inset-y-0 left-2 my-auto h-4 text-gray-400" />
        )}
        {icon === 'email' && (
          <Mail className="absolute inset-y-0 left-2 my-auto h-4 text-gray-400" />
        )}
        <input
          type="text"
          placeholder="이름을 입력하세요"
          className={clsx(
            inputStyle({ isError: isError, hasIcon: Boolean(icon) })
          )}
        />
      </div>
      <span className={clsx(errorMessageStyle({ isError: isError }))}>
        올바른 형식으로 입력해주세요
      </span>
    </label>
  )
}

export default Input
