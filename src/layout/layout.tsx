import Menu from '@/components/Menu'
import ProfileContainer from '@/components/ProfileContainer'
import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="flex">
                <div className="w-1/4">
                    <ProfileContainer />
                </div>
                <div className="w-3/4">
                    <Menu />
                    <main>{children}</main>
                </div>
            </div>
        </>
    )
}

export default Layout
