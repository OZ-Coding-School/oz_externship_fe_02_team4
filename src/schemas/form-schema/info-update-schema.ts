import { z } from 'zod'
import { signupSchema } from './signup-schema'

// 내 정보 수정
const InfoUpdateSchema = z.object({
  nickname: signupSchema.shape.nickname,
  phoneNumber: signupSchema.shape.phoneNumber,
  infoUpdateVerificationCode: z
    .string()
    .min(6, '인증번호 6자리를 입력해주세요'),
})

type InfoUpdateType = z.infer<typeof InfoUpdateSchema>

export { InfoUpdateSchema }
export type { InfoUpdateType }
