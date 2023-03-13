import React from 'react'
import Image from 'next/image'
import profileImage from '../assets/profile.jpg'
import { roboto, inter } from '@/utils/fonts'

const ProfileContainer = () => {
    return (
        <>
            <div className="flex w-full h-screen flex-col items-center justify-center">
                <Image
                    className="rounded-full drop-shadow-xl m-3 border-2 border-gray-200"
                    src={profileImage}
                    title="Claudio Coder Profile"
                    alt="ProfileImage"
                    width={200}
                />
                <h1 className={`${roboto.className} text-xl font-bold`}>
                    Hi, my name is Claudio!
                </h1>
                <h2 className={`${inter.className} text-base`}>
                    Software Developer
                </h2>
            </div>
        </>
    )
}

export default ProfileContainer
