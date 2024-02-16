'use client'

import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {
    const isUserLoggedIn = false;  // TODO: Use the session hook to check if user is logged in.
    const [providers, setProviders] = useState(null)
    useEffect(()=>{
        const setProviders = async () =>{
            const response = await getProviders();
            setProviders(response)
        }

        setProviders();
    },[])


  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href={"/"} className='flex gap-2 flex-center'>
    <Image src="/assets/images/logo.svg" alt="Logo" height={40} width={40} className='object-contain'/>
    <p className='logo_text'>HydraPrompt</p>
        </Link>

        {/* Desktop Navigation */}
        <div className="sm:flex hidden">
            {isUserLoggedIn ?(
                <div className="flex gap-3 md:gap-5">
                    <Link href="/create-prompt" className='black_btn'>Create Post</Link>
                    <button type='button'  onClick={signOut} className='outline_btn'>Sign Out</button>
                    <Link className='' href={'/profile'}>
                        <Image src={"/assets/images/logo.svg"} width={40} height={40} className='rounded-full' alt='Profile'/>
                    </Link>
                </div>
            ):(
                <div className="">

                </div>
            )}
        </div>
    </nav>
  )
}

export default Nav