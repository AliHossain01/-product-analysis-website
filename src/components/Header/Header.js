import React from 'react'
import { Link } from 'react-router-dom'
import CustomLink from '../CustomLink/CustomLink'

const Header = () => {
    return (
        <div className=' font-mono sticky top-0 bg-emerald-50 px-12 py-8 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <Link className='font-mono font-bold text-xl text-cyan-500' to='/'>
                    চলনবিল ভিলেজ ফুডস
                </Link>
            </div>
            <div className='flex gap-4 text-xl'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/reviews'>Reviews</CustomLink>
                <CustomLink to='/dashboard'>Dashboard</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/about'>About</CustomLink>

            </div>
        </div>
    )
}

export default Header
