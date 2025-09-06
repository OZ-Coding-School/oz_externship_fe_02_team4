import { Button } from '@/components'
import { useToast } from '@/hooks'

function ToastTest() {
  const { triggerToast } = useToast()

  return (
    <section className="flex h-1000 flex-col gap-10">
      <h3 className="text-center text-xl font-semibold">토스트 메시지 Test</h3>
      <article className="flex w-fit flex-col gap-6">
        <Button
          onClick={() => triggerToast('success', '성공 알림 테스트')}
          className="bg-success-500 hover:bg-success-600 active:bg-success-800 rounded-xl p-4 text-white"
        >
          성공 토스트
        </Button>
        <Button
          onClick={() => triggerToast('warning', '경고 알림 테스트')}
          className="bg-primary-500 rounded-xl p-4 text-white"
        >
          경고 토스트
        </Button>
        <Button
          onClick={() => triggerToast('error', '에러 알림 테스트')}
          className="bg-danger-500 hover:bg-danger-600 active:bg-danger-800 rounded-xl p-4 text-white"
        >
          에러 토스트
        </Button>
      </article>
    </section>
  )
}

export default ToastTest
