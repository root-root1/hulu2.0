import Image from 'next/image'
import HeaderItem from '../components/HeaderItem';
import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
  } from '@heroicons/react/outline';

const myLoader = ({ src }) => {
    return `https://links.papareact.com/${src}`
}      



const Header =()=> {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
            <HeaderItem title="HOME" Icon={HomeIcon} />
            <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
            <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
            <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
            <HeaderItem title="SEARCH" Icon={SearchIcon} />
            <HeaderItem title="USER" Icon={UserIcon} />
            </div>
            <Image 
                loader={myLoader}
                className='object-contain' 
                src='ua6' 
                width={200} height={100} 
            />
        </header>
    )
}

export default Header;
