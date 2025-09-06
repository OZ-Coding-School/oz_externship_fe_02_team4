import { Input } from '@/components'

function InputTest() {
  return (
    <section className="flex w-full flex-col gap-10">
      <h3 className="text-center text-xl font-semibold">입력 필드 Test</h3>
      <article className="flex flex-col gap-6">
        <Input label="이름" placeholder="이름을 입력하세요" isRequired />
        <Input
          label="이름"
          placeholder="이름을 입력하세요"
          isRequired
          isError
        />
        <Input label="검색" placeholder="검색어를 입력하세요" icon="search" />
        <Input
          label="검색"
          placeholder="검색어를 입력하세요"
          isError
          icon="search"
        />
        <Input
          label="이메일"
          placeholder="이메일을 입력하세요"
          icon="email"
          isRequired
        />
        <Input
          label="이메일"
          placeholder="이메일을 입력하세요"
          isRequired
          isError
          icon="email"
        />
      </article>
    </section>
  )
}

export default InputTest
