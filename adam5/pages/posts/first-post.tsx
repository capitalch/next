import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../../components/layout'
function FirstPost() {
    return (
        <>
            <Head>
                <title>First post</title>
            </Head>
            <h1>
                First post
                <h6>
                    <Link href='/'>
                        <a>Back to home</a>
                    </Link>
                </h6>
            </h1>
            <Image src='/images/profile.jpg'
                width={100}
                height={100}
            />
            <Layout />
        </>
    )
}
export default FirstPost