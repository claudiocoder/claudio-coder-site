import React from 'react'
import Image from 'next/image'
import { _roboto, _khula } from '@/lib/utils/fonts'
import SocialNetwork from './SocialNetworkContainer'
import profileImage from '../assets/profile.jpg'

const ProfileContainer = () => {
  return (
    <aside
      aria-labelledby='author-name'
      className='author-panel grid w-full grid-cols-[5rem_minmax(0,1fr)] self-start items-center gap-x-4 gap-y-4 text-slate-800'
    >
      <Image
        className='h-20 w-20 rounded-full object-cover'
        src={profileImage}
        alt='Retrato de Claudio'
        width={200}
        height={200}
        sizes='(min-width: 1024px) 160px, 80px'
      />
      <div className='min-w-0'>
        <p
          id='author-name'
          className={`${_roboto.className} text-xl font-bold leading-7`}
        >
          ¡Hola, soy Claudio!
        </p>
        <p className={`${_khula.className} mt-1 text-base text-slate-600`}>
          Desarrollador de software
        </p>
      </div>
      <p className='col-span-full text-base leading-6 text-slate-600'>
        Comparto lo que aprendo trabajando en desarrollo web y móvil:
        experiencias reales, decisiones y lecciones del día a día.
      </p>
      <div className='col-span-full w-full'>
        <SocialNetwork />
      </div>
    </aside>
  )
}

export default ProfileContainer
