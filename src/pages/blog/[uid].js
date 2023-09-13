import { useRouter } from "next/router"

const BlogDetails = ()=>{

  const router =   useRouter()

  return (
    <>
    {router.query.uid}
    </>
  )
}

export default BlogDetails