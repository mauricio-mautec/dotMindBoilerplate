import { useRouter } from 'next/router'
export default function Index() {
  const router = useRouter()

  console.log(router)
  return (
    <>
      <h1 style={{ color: 'white' }}>pathname {router.pathname}</h1>
      <h1 style={{ color: 'white' }}>asPath {router.asPath}</h1>
      <h1 style={{ color: 'white' }}>route {router.route}</h1>
      <h1 style={{ color: 'white' }}>basePath [{router.basePath}]</h1>
      <h1 style={{ color: 'white' }}>locale [{router.locale}]</h1>
      <h1 style={{ color: 'white' }}>query.slug [{router.query.slug}]</h1>
      <h1 style={{ color: 'white' }}>
        isReady [{router.isReady ? 'True' : 'False'}]
      </h1>
      <h1 style={{ color: 'white' }}>
        isPreview [{router.isPreview ? 'True' : 'False'}]
      </h1>
      <h1 style={{ color: 'white' }}>
        isLocaleDomain [{router.isLocaleDomain ? 'True' : 'False'}]
      </h1>
      <h1 style={{ color: 'white' }}>
        isFallback [{router.isFallback ? 'True' : 'False'}]
      </h1>
    </>
  )
}
