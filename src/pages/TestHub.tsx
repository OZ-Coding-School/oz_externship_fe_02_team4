import { Button } from '@/components'
import { testPages } from '@/test-hub/registry'
import { Suspense, useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router'

function TestHub() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/test-hub' && testPages.length > 0) {
      navigate(`/test-hub/${testPages[0].route}`, { replace: true })
    }
  }, [pathname, navigate])

  return (
    <main className="flex h-dvh">
      <aside className="bg-gray-200 p-10">
        <h2 className="py-5 text-center text-2xl font-bold">Test Hub</h2>
        <div className="flex flex-col gap-5">
          {testPages &&
            testPages.map((p) => (
              <Button
                key={p.key}
                variant="outline"
                onClick={() => navigate(`/test-hub/${p.route}`)}
                className="px-10 py-5"
              >
                {p.name}
              </Button>
            ))}
        </div>
      </aside>
      <main className="w-full overflow-auto p-20">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </main>
  )
}

export default TestHub
