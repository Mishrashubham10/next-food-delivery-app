import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='uppercase h-12 md:h-24 p-4 lg:20 xl:40 text-red-500 flex items-center justify-between'>
      <Link href="/" className='uppercase fond-bold text-xl'>massimo</Link>
      <p className='text-sm'>&Copy; all right reserved.</p> 
    </footer>
  )
}

export default Footer