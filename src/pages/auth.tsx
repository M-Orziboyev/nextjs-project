import Head from "next/head";
import Image from "next/image";
import { useState } from 'react';

const Auth = () => {
    const [auth, setAuth] = useState<'signup' | 'signin'>('signin')

    const toggleAuth = (state: 'signup' | 'signin') => {
        setAuth(state)
    }

    return (
        <div className='relative flex h-screen w-screen flex-col md:items-center md:justify-center bg-black md:bg-transparent'>
            <Head>
                <title>Auth</title>
                <meta
                    name="description"
                    content="For watching movies you should sign to app"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <Image src={'https://assets.nflxext.com/ffe/siteui/vlv3/d0982892-13ac-4702-b9fa-87a410c1f2da/519e3d3a-1c8c-4fdb-8f8a-7eabdbe87056/AE-en-20220321-popsignuptwoweeks-perspective_alpha_website_large.jpg'} alt={'bg'} fill className='object-cover -z-10 !hidden sm:!inline opacity-60' />
            <Image
                src={"/logo.svg"}
                alt={"logoo"}
                width={80}
                height={80}
                className="absolute left-4 top-4 cursor-pointer object-contain"
            />
            <form
                action=""
                className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:mx-14"
            >

                {auth == 'signin' ? (<h1 className="text-4xl font-semibold">Sign in</h1>) : <h1 className="text-4xl font-semibold">Sign Up</h1>}
                <div className="space-y-4">
                    <label className="inline-block w-full">
                        <input type="text" placeholder="Email" className="input" />
                    </label>
                    <label className="inline-block w-full">
                        <input type="text" placeholder="Password" className="input" />
                    </label>
                </div>
                {auth === 'signin' ? (
                    <div className="text-[gray]">
                        <button type="submit" className="w-full text-white bg-[#E10856] py-3 font-semibold">Sign In</button>
                        Not yet account? <button type="button" className="text-white hover:underline" onClick={() => toggleAuth('signup')}>Sign Up Now</button>
                    </div>

                ) :
                    <div className="text-[gray]">
                        <button type="submit" className="w-full text-white bg-[#E10856] py-3 font-semibold">Sign Up</button>
                        Already have account <button type="button" className="text-white hover:underline" onClick={() => toggleAuth('signin')}>Sign In</button>
                    </div>
                }
            </form>
        </div>
    );
};

export default Auth;
