import Link from 'next/link'

export default function Footer() {
  return (
    <div>
      <Link
        href='/'
        className='font-bold underline underline-offset-4 text-gray-500'
      >
        Regresar
      </Link>
    </div>
  )
}
