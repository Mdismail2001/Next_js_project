import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request ) {
    const userData ={
        role : 'admin'
    }
    // console.log('middleware', request.nextUrl.pathname.startsWith('/about'))
   let  isServices = request.nextUrl.pathname.startsWith('/services')
    if( isServices && userData.role !== 'admin'){
        return NextResponse.redirect(new URL('/', request.url))
    }
  return NextResponse.next() //redirect(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }