import TestHub from '@/pages/TestHub'
import { testPages } from '@/test-hub/registry'
import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router'

function TestRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/test-hub" replace />} />
      <Route path="/test-hub/*" element={<TestHub />}>
        {testPages.map((p) => {
          const Page = lazy(p.loader)
          return (
            <Route
              key={p.key}
              path={p.route}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Page />
                </Suspense>
              }
            />
          )
        })}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  )
}

export default TestRoutes
