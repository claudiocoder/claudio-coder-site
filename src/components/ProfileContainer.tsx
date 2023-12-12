import React from 'react'
import Image from 'next/image'
import { _roboto, _khula } from '@/utils/fonts'
import SocialNetwork from './SocialNetworkContainer'
import profileImage from '../assets/profile.jpg'

const ProfileContainer = () => {
  return (
    <>
      <div>
        <div className="mb-5 flex flex-col items-center">
          <Image
            className="shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-full"
            src={profileImage}
            title="Claudio Coder Profile"
            alt="ProfileImage"
            width={200}
            height={200}
          />
        </div>
        <h1 className={`${_roboto.className} text-xl font-bold mb-1 text-center`}>Hola, mi nombre es Claudio!</h1>
        <h2 className={`${_khula.className} text-base mb-5 text-center`}>Software Developer</h2>
        <div>
          <SocialNetwork></SocialNetwork>
        </div>
      </div>
    </>
  )
}

export default ProfileContainer
