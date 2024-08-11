'use client'
import { FC , useState} from 'react'
import Link from 'next/link'
import { LayoutDashboard, SquareActivity, Users, Settings } from 'lucide-react';
import { usePathname } from 'next/navigation'
import { Separator } from '../ui/separator';



interface navProps {
  
}

const Navbar: FC<navProps> = ({}) => {
  const pathname = usePathname()


  return(
    <div className=' w-full'>
      <h1 className="text-4xl mb-4 font-semibold ">Sentinel</h1>
      <div className='flex gap-6 mb-4'>

        <Link href='/dashboard/overview'>
        <span className={`flex gap-1 items-center cursor-pointer ${pathname === '/dashboard/overview' ? 'text-sky-500 underline underline-offset-4 decoration-2' : 'text-black'} hover:text-sky-500  transition ease-in-out delay-150`}>
            <LayoutDashboard strokeWidth={1.5} size={16} />
            <p>Overview</p>
        </span>
        </Link>

        <Link href='/dashboard/activities'>
        <span className={`flex gap-1 items-center cursor-pointer ${pathname === '/dashboard/activities' ? 'text-sky-500 underline underline-offset-4 decoration-2' : 'text-black'} hover:text-sky-500  transition ease-in-out delay-150`}>
            <SquareActivity strokeWidth={1.5} size={16} />
            <p>Activity</p>
        </span>
        </Link>

        <Link href='/dashboard/users'>
        <span className={`flex gap-1 items-center cursor-pointer ${pathname === '/dashboard/users' ? 'text-sky-500 underline underline-offset-4 decoration-2' : 'text-black'} hover:text-sky-500  transition ease-in-out delay-150`}>
            <Users strokeWidth={1.5} size={16} />
            <p>Users</p>
        </span>
        </Link>

        <Link href='/dashboard/settings'>
        <span className={`flex gap-1 items-center cursor-pointer ${pathname === '/dashboard/settings' ? 'text-sky-500 underline underline-offset-4 decoration-2' : 'text-black'} hover:text-sky-500  transition ease-in-out delay-150`}>
            <Settings strokeWidth={1.5} size={16} />
            <p>Settings</p>
        </span>
        </Link>

      </div>
      <Separator />
    </div>
  )
}

export default Navbar