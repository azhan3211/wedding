'use client';

import UndanganKuInput from "@/components/input/input";
import NavigationComponent from "@/components/nav";
import { RotatingLines } from "react-loader-spinner";
import React, { useState } from "react";

export default function SignUp() {

    const handleContactClicked = () => {
        window.location.replace("/home#contact")
    }

    const handlePriceClicked = () => {
        window.location.replace("/home#price")
    }

    const handleHowToClicked = () => {
        window.location.replace("/home#howto")
    }

    const handleLoginClicked = () => {
        window.location.replace("/login")
    }

    const handleOnChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleOnChangePasswordConfirmation = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirmation(event.target.value)
    }

    const handleOnChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handleSignUpButtonClicked = () => {
        setEmailError(false)
        setPasswordError(false)
        setPasswordConfirmationError(false)
        setErrorMessage('')
        if (email === '') {
            setEmailError(true);
            return
        }
        if (password === '') {
            setPasswordError(true);
            return
        }
        if (passwordConfirmation === '') {
            setPasswordConfirmationError(true)
            return
        }
        if (passwordConfirmation !== password) {
            setErrorMessage("Not matched")
            setPasswordError(true)
            setPasswordConfirmationError(true)
            return
        }
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    const [errorMessage, setErrorMessage] = useState('')
    
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [email, setEmail] = useState('')
    const [isEmailError, setEmailError] = useState(false)
    const [isPasswordError, setPasswordError] = useState(false)
    const [isPasswordConfirmationError, setPasswordConfirmationError] = useState(false);

    const [isLoading, setLoading] = useState(false)

    return <div className="flex justify-center w-full bg-white h-full">
        <div className="w-full flex flex-col 2xl:p-0 px-[20px] 2xl:w-[1400px] h-screen relative bg-white">
            <NavigationComponent
                onContactClicked={handleContactClicked}
                onPriceClicked={handlePriceClicked}
                onHowToClicked={handleHowToClicked}/>
            <div className="w-full flex justify-center items-center h-full">
                <div className="w-full rounded-[20px] shadow-lg flex flex-row border-2 border-gray-300 2xl:py-[20px] py-[40px] bg-white">
                    <div className="w-0 lg:w-[50%] lg:p-[10%] invisible lg:visible">
                        <img src="../images/login-sign-up.jpg" className="w-full aspect-[1] object-cover" />
                    </div>
                    <div className="flex flex-col items-center justify-center w-full lg:w-[50%] relative px-[10%]">
                        <p className="text-[40px] font-bold text-main">Undangan ku</p>
                        <UndanganKuInput 
                            type="text" 
                            label="Email"
                            isError={isEmailError}
                            value={email}
                            onChange={handleOnChangeEmail}/>
                        <div className="w-full h-[20px]"/>
                        <UndanganKuInput 
                            type="password" 
                            label="Password"
                            isError={isPasswordError}
                            value={password}
                            errorMessage={errorMessage}
                            onChange={handleOnChangePassword}/>
                        <div className="w-full h-[20px]"/>
                        <UndanganKuInput 
                            type="password" 
                            label="Konfirmasi Password"
                            isError={isPasswordConfirmationError}
                            value={passwordConfirmation}
                            errorMessage={errorMessage}
                            onChange={handleOnChangePasswordConfirmation}/>
                        {
                            isLoading && 
                            <RotatingLines
                                strokeColor="#007F73"
                                strokeWidth="2"
                                animationDuration="0.75"
                                width="90"
                                visible={true}/> ||
                            <button 
                                onClick={handleSignUpButtonClicked} 
                                className="rounded-[8px] shadow-lg hover:bg-secondary mt-[40px] w-[220px] h-[50px] uppercase text-[20px] font-bold text-white bg-main">Sign Up</button>
                        }
                        <div className="w-full flex flex-row gap-x-[40px] justify-center items-center mt-[20px]">
                            <div className="w-full h-[1px] bg-gray-600"/>
                            <p className="text-[18px] font-semibold text-gray-600">Or</p>
                            <div className="w-full h-[1px] bg-gray-600"/>
                        </div>
                        <button
                            className="bg-white hover:bg-gray-100 h-[50px] text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-[8px] shadow flex items-center mt-[20px]">
                            <img src="../images/google.png" className="size-[30px] mr-[10px]"/>
                            Sign Up with Google
                        </button>
                        <p className="text-[18px] text-gray-600 mt-[20px]">Sudah punya akun? Login <b onClick={handleLoginClicked} className="text-main cursor-pointer text-[18px] font-bold">Disini</b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}