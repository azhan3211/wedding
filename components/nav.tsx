'use client';

import { useState } from "react"
import Hamburger from 'hamburger-react'

interface NavigationComponentProps {
    onContactClicked?: () => void
    onPriceClicked?: () => void
    onHowToClicked?: () => void
}

export default function NavigationComponent({ onContactClicked, onPriceClicked, onHowToClicked }: NavigationComponentProps) {


    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    return <nav className="h-fit w-full rounded-[20px] p-4 flex justify-between items-center">
        <a href="/home"><img src="../images/instagram.png" className='size-[40px]'/></a>
        <div className="flex flex-row justify-end items-center h-[80px]">
            <div className="size-[40px] lg:invisible visible cursor-pointer">
                <Hamburger toggled={showMenu} toggle={handleShowMenu} color="#718096"/>                
            </div>
            <ul className={`z-10 ${ showMenu ? 'visible lg:pb-0 pb-[20px] lg:gap-y-0 gap-y-[20px] bg-white border-b-2 border-gray-300 lg:border-none shadow-lg lg:shadow-none lg:bg-transparent absolute lg:relative lg:top-0 top-[100px] flex-col lg:flex-row left-0 w-full' : 'invisible lg:visible w-0 lg:w-full' } flex justify-end items-center lg:gap-x-[40px]`}>
                <li className={`${ showMenu ? 'w-full lg:w-[100px]' : 'lg:w-[100px]'} flex justify-center items-center`}>
                    <a href="/home" className="text-main text-[20px] hover:text-secondary hover:font-bold">Home</a>
                </li>
                <li className={`${ showMenu ? 'w-full lg:w-[100px]' : 'lg:w-[100px]'} flex justify-center items-center`}>
                    <p onClick={onHowToClicked} className="text-main cursor-pointer text-[20px] hover:text-secondary hover:font-bold">Cara Buat</p>
                </li>
                <li className={`${ showMenu ? 'w-full lg:w-[100px]' : 'lg:w-[100px]'} flex justify-center items-center`}>
                    <p onClick={onPriceClicked} className="text-main cursor-pointer text-[20px] hover:text-secondary hover:font-bold">Price</p>
                </li>
                <li className={`${ showMenu ? 'w-full lg:w-[100px]' : 'lg:w-[100px]'} flex justify-center items-center`}>
                    <p onClick={onContactClicked} className="text-main cursor-pointer text-[20px] hover:text-secondary hover:font-bold">Contact</p>
                </li>
                <li className={`flex ${ showMenu ? 'lg:gap-y-0 gap-y-[20px] lg:flex-row flex-col lg:w-fit w-full' : ''} lg:gap-x-[40px]  items-center justify-center`}>
                    <a href="/login" className={`${ showMenu ? 'w-full lg:w-[100px]' : 'lg:w-[100px]'} text-main text-[20px] hover:text-secondary hover:font-bold text-center`}>Login</a>
                    <a href="/signup">
                        <button className="text-white font-bold bg-main hover:bg-secondary px-4 rounded-[10px] shadow-md h-[50px] uppercase">
                            Sign Up
                        </button>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
}