import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request ) {
    const userData ={
        role : 'user'
    }
    // console.log('middleware', request.nextUrl.pathname.startsWith('/about'))
   let  pathname = request.nextUrl.pathname.startsWith('/services')
    if( pathname && userData.role !== 'admin'){
        return NextResponse.redirect(new URL('/', request.url))
    }
  return NextResponse.next() //redirect(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }