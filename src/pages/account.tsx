import Head from "next/head";
import Image from "next/image";
import {AiOutlineUser} from "react-icons/ai";
import Link from "next/link";
import {MdSubscriptions} from "react-icons/md";
import {MembershipPlan} from "../components";
import {GetServerSideProps} from "next";
import {API_REQUEST} from "../services/api.service";
import {Subscription} from "../components/interfaces/app.interface";
import moment from "moment";

function Account({subscription} : AccountProps) {

    console.log(subscription)
    // @ts-ignore
    // @ts-ignore
    return (
        <>
            <Head>
                <title>Account Settings</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/logo.svg"/>
            </Head>
            <header>
                <div className='flex items-center space-x-2 md:space-x-10'>
                    <Link href={'/'}>
                        <Image src={'/logo.svg'} alt={'logo'} width={56} height={56}
                               className={'cursor-pointer object-contain'}/>
                    </Link>
                </div>
                <div className='flex items-center space-x-4 text-sm font-light'>
                    <Link href={'/account'}>
                        <AiOutlineUser className='h-6 w-6 cursor-pointer'/>
                    </Link>
                </div>
            </header>
            <main className='mx-auto max-w-6xl px-5 pt-24 pb-12 transation-all md:px-10 '>
                <div className='flex flex-col gap-x-4 md:flex-row md:items-center'>
                    <h1 className="text-3xl md:text-4xl">Account</h1>
                    <div className='-ml-1 flex items-center gap-x-1.5'>
                        <MdSubscriptions className='w-5 h-5 text-red-500'/>
                        <p className='font-semibold text-md text-[#555]'>Member since {moment(subscription.current_period_start * 1000).format('DD MMM, YYYY' )} </p>
                    </div>
                </div>

                <MembershipPlan subscription={subscription}/>

                <div
                    className='mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:bordder-x-0 md:border-t md:border-b-0 md:pb-0'>
                    <h4 className='text-lg text-[grey]'>Plan Details</h4>
                    <div className='col-span-2 font-medium'>{subscription.plan.nickname}</div>
                    <p className='cursor-pointer text-blue-700 md:text-right hover:underline '>Change Plan</p>
                </div>
                <div
                    className='mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:bordder-x-0 md:border-t md:border-b-0 md:pb-0'>
                    <h4 className='text-lg text-[grey]'>Settings</h4>
                    <p className='col-span-3 cursor-pointer text-blue-700 hover:underline'>Sign in of all devices</p>
                </div>
            </main>
        </>
    )
}

export default Account;

export const getServerSideProps: GetServerSideProps<AccountProps> = async ({req}) => {
    const user_id = req.cookies.user_id;

    if (!user_id) {
        return {
            redirect: {destination: '/auth', permanent: false},
        }
    }
    const subscription = await fetch(`${API_REQUEST.subscription}/${user_id}`).then(res => res.json());
    return {
        props: {
            subscription: subscription.subscription.data[0],
        },
    }
};

interface AccountProps {
    subscription: Subscription;
}