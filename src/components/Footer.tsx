import Link from 'next/link'

export default function Footer() {
  return (
    <div>
      <Link href='/' className='back-link'>
        ← Volver al blog
      </Link>
    </div>
  )
}
