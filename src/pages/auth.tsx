import Head from "next/head";
import Image from "next/image";
import { useState } from 'react';
import { TextField } from "src/components";
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import useAuth from '../hooks/useAuth';

const Auth = () => {
    const [auth, setAuth] = useState<'signup' | 'signin'>('signin')
    const { error, isLoading, signIn, signUp, user, setIsLoading } = useAuth()
    const router = useRouter()

    const toggleAuth = (state: 'signup' | 'signin') => {
        setAuth(state)
    }

    if (user) router.push('/');  

    const onSubmit = async (formData: { email: string, password: string }) => {
        if (auth === 'signup') {
            setIsLoading(true);
            const response = await fetch('/api/customers', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email: formData.email}),
            })
            const data = await response.json()
            console.log(data);
            signUp(formData.email, formData.password)
        } else {
            signIn(formData.email, formData.password)
        }
    }

    const validation = Yup.object({
        email: Yup.string().email('Enter valid email').required('Email is required'),
        password: Yup.string().min(6, '6 minimum character').required('Password is required')
    })
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
                alt={"logo"}
                width={80}
                height={80}
                className="absolute left-4 top-4 cursor-pointer object-contain"
            />
            <div className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:mx-14"
            >

                <h1 className='text-4xl font-semibold'>{auth === 'signup' ? 'Sign up' : 'Sign In'}</h1>
                {error && <p className="text-red-500 font-semibold text-center">{error}</p>}
                <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit} validationSchema={validation}>
                    <Form>
                        <div className="space-y-4">
                            <TextField name='email' placeholder="Email" type="text" />
                            <TextField name="password" placeholder="Password" type="password" />
                        </div>
                        <button type="submit" className="w-full text-white mt-4 bg-[#E10856] py-3 font-semibold">
                            {isLoading ? 'Loading...' : auth === 'signin' ? 'Sign In' : 'Sign Up'}
                        </button>
                        {auth === 'signin' ? (
                            <div className="text-[gray]">
                                Not yet account? <button type="button" className="text-white  hover:underline" onClick={() => toggleAuth('signup')}>Sign Up Now</button>
                            </div>

                        ) :
                            <div className="text-[gray]">
                                Already have account <button type="button" className="text-white mt-4 hover:underline" onClick={() => toggleAuth('signin')}>Sign In</button>
                            </div>
                        }
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Auth;
