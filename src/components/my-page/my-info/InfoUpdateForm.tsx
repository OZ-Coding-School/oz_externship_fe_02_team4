import {
  ModalMain,
  ModalFooter,
  ModalClose,
  useModalContext,
} from '@/components/common/Modal'
import { Avatar, Button } from '@/components'
import { Input, InputLabel, InputErrorMessage } from '@/components/common/input'
import { useUserInformation, useUpdateUserInfo } from '@/hooks/api'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  InfoUpdateSchema,
  type InfoUpdateType,
} from '@/schemas/form-schema/info-update-schema'
import { useVerificationCode } from '@/hooks'
import { cn } from '@/utils'
import { useEffect } from 'react'

export const InfoUpdateForm = () => {
  const { data: userInfo } = useUserInformation()
  const { close } = useModalContext()
  const {
    isCodeSent,
    isCodeVerified,
    timer,
    handleCodeSend,
    handleCodeVerify,
  } = useVerificationCode()

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
    reset,
  } = useForm<InfoUpdateType>({
    mode: 'onChange',
    resolver: zodResolver(InfoUpdateSchema),
    defaultValues: {
      nickname: '',
      phoneNumber: '',
    },
  })

  // ✅ userInfo 들어오면 form 값 초기화
  useEffect(() => {
    if (userInfo) {
      reset({
        nickname: userInfo.nickname ?? '',
        phoneNumber: userInfo.phoneNumber ?? '',
      })
    }
  }, [userInfo, reset])

  const phoneNumber = getValues('phoneNumber')

  const handlePhoneCodeSendClick = () => {
    if (!phoneNumber) {
      setError('phoneNumber', {
        message: '휴대폰 번호를 입력해주세요',
      })
      return
    }
    handleCodeSend('phoneNumber', phoneNumber)
  }

  const handleVerifyButtonClick = () => {
    const verificationCode = getValues('infoUpdateVerificationCode')
    if (!verificationCode) {
      setError('infoUpdateVerificationCode', {
        message: '인증번호를 입력해주세요',
      })
      return
    }
    handleCodeVerify('phoneNumber', {
      phoneNumber,
      verificationCode,
    })
  }

  const updateUserInfo = useUpdateUserInfo({
    onSuccess: () => {
      close()
    },
  })

  // ✅ 최종 제출
  const onSubmit = (values: InfoUpdateType) => {
    if (!isCodeVerified.phoneNumber) {
      setError('infoUpdateVerificationCode', {
        message: '휴대폰 번호 인증을 완료해주세요',
      })
      return
    }

    updateUserInfo.mutate({
      nickname: values.nickname,
      phoneNumber: values.phoneNumber,
    })
  }

  if (!userInfo) return null

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalMain className="flex flex-col gap-6">
        {/* 프로필 이미지 */}
        <label className="flex cursor-pointer flex-col items-center gap-4">
          <Avatar
            size="3xl"
            state="none"
            src={userInfo.profileImageUrl ?? undefined}
          />
          <span className="text-primary-600 text-sm">프로필 사진 변경</span>
        </label>

        {/* 닉네임 */}
        <div className="flex flex-col gap-2">
          <InputLabel isRequired>닉네임</InputLabel>
          <Input id="nickname" {...register('nickname')} />
          {errors.nickname && (
            <InputErrorMessage>{errors.nickname.message}</InputErrorMessage>
          )}
        </div>

        {/* 휴대폰 번호 입력 + 인증하기 버튼 */}
        <div className="flex flex-col gap-2">
          <InputLabel isRequired>휴대폰 번호</InputLabel>
          <div className="flex gap-2">
            <Input
              id="phoneNumber"
              {...register('phoneNumber')}
              readOnly={isCodeSent.phoneNumber}
            />
            <Button
              variant="secondary"
              type="button"
              onClick={handlePhoneCodeSendClick}
              disabled={isCodeVerified.phoneNumber}
              className="min-w-[110px]"
            >
              {isCodeSent.phoneNumber ? (
                <span className="ml-2 text-sm whitespace-nowrap text-gray-900">
                  재전송{' '}
                  {timer.phoneNumber.formatMMSS(timer.phoneNumber.remainSecond)}
                </span>
              ) : (
                '인증하기'
              )}
            </Button>
          </div>
          {errors.phoneNumber && (
            <InputErrorMessage>{errors.phoneNumber.message}</InputErrorMessage>
          )}
        </div>

        {/* 인증번호 입력 */}
        {isCodeSent.phoneNumber && (
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Input
                id="infoUpdateVerificationCode"
                {...register('infoUpdateVerificationCode')}
                placeholder="인증코드 6자리 입력"
                readOnly={isCodeVerified.phoneNumber}
                className={cn(
                  isCodeVerified.phoneNumber && 'bg-gray-100 text-gray-500'
                )}
              />
              <Button
                variant={isCodeVerified.phoneNumber ? 'secondary' : 'primary'}
                type="button"
                onClick={handleVerifyButtonClick}
                disabled={isCodeVerified.phoneNumber}
                className="whitespace-nowrap"
              >
                {isCodeVerified.phoneNumber ? '인증완료' : '확인'}
              </Button>
            </div>
            {errors.infoUpdateVerificationCode && (
              <InputErrorMessage>
                {errors.infoUpdateVerificationCode.message}
              </InputErrorMessage>
            )}
          </div>
        )}
      </ModalMain>

      <ModalFooter className="flex justify-end gap-1">
        <ModalClose>
          <Button variant="outline">취소</Button>
        </ModalClose>
        <Button
          variant="primary"
          type="submit"
          // isValid 대신 에러 유무 + 인증 완료 여부로 체크
          disabled={
            Object.keys(errors).length > 0 || !isCodeVerified.phoneNumber
          }
        >
          변경하기
        </Button>
      </ModalFooter>
    </form>
  )
}
