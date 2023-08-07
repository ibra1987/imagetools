import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center '>
      <h2 className='text-3xl'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return <span className='text-red-400'>Home</span></Link>
    </div>
  )
}