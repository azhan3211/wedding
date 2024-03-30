'use client';

import UndanganKuInput from "@/components/input/input";
import NavigationComponent from "@/components/nav";
import React, { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import connectMongoDB from "@/libs/mongodb";

export default function LoginComponent() {

    const handleContactClicked = () => {
        window.location.replace("/home#contact")
    }

    const handlePriceClicked = () => {
        window.location.replace("/home#price")
    }

    const handleHowToClicked = () => {
        window.location.replace("/home#howto")
    }

    const handleSignUpClicked = () => {
        window.location.replace("/signup")
    }

    const [email, setEmail] = useState('')
    const [isEmailError, setEmailError] = useState(false)

    const [password, setPassword] = useState('')
    const [isPasswordError, setPasswordError] = useState(false)

    const [loading, setLoading] = useState(false)

    const handleLoginButtonClicked = () => {
        setEmailError(false)
        setPasswordError(false)
        if (email === '') {
            setEmailError(true)
            return
        }
        if (password === '') {
            setPasswordError(true)
            return
        }

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>  {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>  {
        setPassword(event.target.value)
    }

    return <div className="flex justify-center w-full bg-white h-full">
        <div className="w-full flex flex-col 2xl:p-0 px-[20px] 2xl:w-[1400px] h-screen relative">
            <NavigationComponent 
                onContactClicked={handleContactClicked}
                onPriceClicked={handlePriceClicked}
                onHowToClicked={handleHowToClicked}/>
            <div className="w-full flex justify-center items-center h-full">
                <div className="w-full rounded-[20px] shadow-lg flex flex-row  border-2 border-gray-300 2xl:py-0 py-[40px]">
                    <div className="w-0 lg:w-[50%] lg:p-[10%] lg:visible invisible">
                        <img src="../images/login-sign-up.jpg" className="w-full aspect-[1] object-cover" />
                    </div>
                    <div className="flex flex-col items-center justify-center w-full lg:w-[50%] relative px-[10%]">
                        <p className="text-[40px] font-bold text-main">Undangan ku</p>
                        <UndanganKuInput 
                            type="text" 
                            label="Email"
                            isError={isEmailError}
                            onChange={handleEmailChange}
                            value={email}/>
                        <div className="w-full h-[20px]"/>
                        <UndanganKuInput 
                            type="password" 
                            label="Password"
                            isError={isPasswordError}
                            onChange={handlePasswordChange}
                            value={password}/>
                        <p className="w-full text-start cursor-pointer mt-[10px] text-main text-[18px] font-bold">Lupa Password</p>
                        {
                            loading &&
                            <RotatingLines
                                strokeColor="#007F73"
                                strokeWidth="2"
                                animationDuration="0.75"
                                width="90"
                                visible={true}/> || <button
                                onClick={handleLoginButtonClicked}
                                className="rounded-[8px] shadow-lg hover:bg-secondary mt-[40px] w-[220px] h-[50px] uppercase text-[20px] font-bold text-white bg-main">Login</button>
                                
                        }
                        <div className="w-full flex flex-row gap-x-[40px] justify-center items-center mt-[20px]">
                            <div className="w-full h-[1px] bg-gray-600"/>
                            <p className="text-[18px] font-semibold text-gray-600">Or</p>
                            <div className="w-full h-[1px] bg-gray-600"/>
                        </div>
                        <button className="bg-white hover:bg-gray-100 h-[50px] text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-[8px] shadow flex items-center mt-[20px]">
                            <img src="../images/google.png" className="size-[30px] mr-[10px]"/>
                            Sign in with Google
                        </button>
                        <p className="text-[18px] text-gray-600 mt-[20px]">Belum punya akun? Daftar <b onClick={handleSignUpClicked} className="text-main cursor-pointer text-[18px] font-bold">Disini</b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}