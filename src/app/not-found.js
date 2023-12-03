import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='mt-12 h-96 container font-sans flex flex-col justify-center items-center gap-3'>
      <span className='text-9xl font-extrabold text-primary'>404</span>
      <p className='text-2xl font-medium text-accent font-mono'>PAGE NOT FOUND</p>
      <Link className='mt-4 border border-primary p-1 px-4 rounded-md font-2xl active:scale-95 ' href="/">Return Home</Link>
    </div>
  )
}