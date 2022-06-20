import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import { useRouter } from 'next/router'
import {
    HomeIcon,
    CollectionIcon,
    BadgeCheckIcon,
    LightningBoltIcon,
    UserIcon,
    SearchIcon
} from '@heroicons/react/outline'

const Header = () => {
  const router = useRouter();
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
            <HeaderItem title='HOME' Icon={HomeIcon} path='/' />
            <HeaderItem title='TRENDING' Icon={LightningBoltIcon} path='/?genre=fetchTrending' />
            <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} path='/' />
            <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} path='/' />
            <HeaderItem title='SEARCH' Icon={SearchIcon} path='/' />
            <HeaderItem title='ACCOUNT' Icon={UserIcon} path='/' />
        </div>
        <Image src="/hulu-white.png" height={100} width={200} className="object-contain" />
    </header>
  )
}

export default Header;

