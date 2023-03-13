import Head from 'next/head'
import ProfileContainer from '@/components/ProfileContainer'

export default function Home() {
    return (
        <>
            <Head>
                <title>Claudio&#180;s Page</title>
                <meta
                    name="description"
                    content="Claudio Coder Personal Page"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ProfileContainer />
        </>
    )
}
