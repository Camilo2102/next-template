'use client';

import MainLoginComponent from "@/app/components/auth/login/mainLoginComponent";

export default function Login() {

    return (
        <div className="flex justify-content-center align-items-center lg:p-8 md:p-6 p-1" style={{ height: '100vh', width: '100vw', overflow: "hidden" }}>
            <div className='lg:col-6 md:col-6 col-12 lg:p-8 md:p-10 p-4'>
                <MainLoginComponent></MainLoginComponent>
            </div>
        </div>
    )
}