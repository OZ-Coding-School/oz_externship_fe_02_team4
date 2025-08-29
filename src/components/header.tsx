interface NavProps {
  label: string
  event?: React.MouseEventHandler<HTMLButtonElement>
}

const Logo = () => {
  return (
    // 크기 숫자 1당 4px으로 계산
    <div className="flex h-12 w-36 items-center">
      <div className="bg-primary-600 text-4 flex h-8 w-8 items-center justify-center rounded-md font-bold text-white">
        S
      </div>
      <div className="text-primary-600 text-heading4 bg-white pl-2 font-bold">
        StudyHub
      </div>
    </div>
  )
}

const NavComponent: React.FC<NavProps> = ({ label, event }) => {
  return (
    <button
      className="mx-4 h-6 whitespace-nowrap text-gray-700"
      onClick={event}
    >
      {label}
    </button>
  )
}

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-99 flex h-[65px] items-center justify-between border border-gray-200 bg-white px-8 pb-px">
      <Logo />
      //TODO event props로 클릭이벤트 전달, 회원가입은 별도로 전달
      <div className="flex items-center">
        <NavComponent label="강의 목록" />
        <NavComponent label="스터디 그룹" />
        <NavComponent label="구인 공고" />
        <NavComponent label="로그인" />
        <button className="bg-primary-600 rounded-md p-2 whitespace-nowrap text-white">
          회원가입
        </button>
      </div>
    </header>
  )
}

export default Header
