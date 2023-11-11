"use client"


import MainRegisterComponent from "@/app/components/auth/register/mainRegisterComponent";
import Image from "next/image";


export default function Register() {
    return (
        <div className="flex justify-content-center align-items-center lg:p-8 md:p-6 p-1" style={{ height: '100vh', width: '100vw', overflow: "hidden" }}>
            <div className='lg:col-6 md:col-6 col-12 lg:p-8 md:p-10 p-4'>
                <MainRegisterComponent></MainRegisterComponent>
            </div>
        </div>
    )
}