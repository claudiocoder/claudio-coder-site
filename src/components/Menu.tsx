import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from '../styles/Menu.module.css'

const Menu = () => {
    const router = useRouter()
    return (
        <div className=" flex gap-10 mt-20 mb-10 text-2xl">
            <Link
                className={`${router.pathname === '/' ? styles.active : ''}`}
                href="/"
            >
                Blog
            </Link>
            <Link
                className={`${
                    router.pathname === '/videos' ? styles.active : ''
                }`}
                href="/videos"
            >
                Videos
            </Link>
        </div>
    )
}

export default Menu
