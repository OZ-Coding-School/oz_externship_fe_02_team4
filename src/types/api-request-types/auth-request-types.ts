export interface UserLogin {
  email: string
  password: string
}

export interface UserSignup {
  email: string
  password: string
  nickname: string
  name: string
  phoneNumber: string
  birthday: string
  gender: string
  emailVerificationCode: string
  phoneVerificationCode: string
}

export interface UserEmailSendCode {
  email: string
}

export interface UserEmailVerify {
  email: string
  verificationCode: string
}

export interface UserPhoneSendCode {
  phoneNumber: string
}

export interface UserPhoneVerify {
  phoneNumber: string
  verificationCode: string
}

export interface UpdateUserInfoRequest {
  nickname: string
  phoneNumber: string
  profileImageUrl: string
}

export interface UserKakaoLogin {
  code: string
}

export interface UserNaverLogin {
  code: string
  state: string
}

export interface UserFindEmailSendCode {
  phoneNumber: string
}

export interface UserFindEmailVerify {
  phoneNumber: string
  verificationCode: string
}

export interface UserFindEmail {
  name: string
  phoneNumber: string
  verificationCode: string
}

export interface UserResetPasswordSendCode {
  email: string
}

export interface UserResetPasswordVerify {
  email: string
  verificationCode: string
}

export interface UserResetPassword {
  password: string
}

// ERD 참조하여 생성
export interface WithdrawalRequest {
  reason: WithdrawalReasonEnum
  reason_detail: string
}

export enum WithdrawalReasonEnum {
  NO_LONGER_NEEDED = 'NO_LONGER_NEEDED',
  LACK_OF_INTEREST = 'LACK_OF_INTEREST',
  TOO_DIFFICULT = 'TOO_DIFFICULT',
  FOUND_BETTER_SERVICE = 'FOUND_BETTER_SERVICE',
  PRIVACY_CONCERNS = 'PRIVACY_CONCERNS',
  POOR_SERVICE_QUALITY = 'POOR_SERVICE_QUALITY',
  TECHNICAL_ISSUES = 'TECHNICAL_ISSUES',
  LACK_OF_CONTENT = 'LACK_OF_CONTENT',
  OTHER = 'OTHER',
}

// 백엔드 ERD 참조
// NO_LONGER_NEEDED // 서비스 이용할 시간이 없음
// LACK_OF_INTEREST // 관심이 사라짐
// TOO_DIFFICULT // 서비스를 이용하기가 너무 어려움
// FOUND_BETTER_SERVICE // 더 좋은 대안을 찾음
// PRIVACY_CONCERNS // 개인정보/보안 우려
// POOR_SERVICE_QUALITY // 서비스 품질 불만
// TECHNICAL_ISSUES // 기술적 문제(버그 등)
// LACK_OF_CONTENT // 원하는 콘텐츠나 기능의 부족
// OTHER // 기타
