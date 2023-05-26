'use client';

import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function FormLogin() {
    const router = useRouter();

    function submit(e: FormEvent) {
        e.preventDefault();
        let data = new FormData(e.target as HTMLFormElement);

        let email = data.get('email');
        let password = data.get('password');
        
        axios.post('http://localhost:3001/auth/login', {
            email: email,
            password: password
        }).then(res => {
            const expirationDate = new Date(Date.now() + res.data.expiresIn * 1000).toUTCString();
            document.cookie = `token=${res.data.token}; expires=${expirationDate}; path=/`;
            router.push('/painel');
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <form onSubmit={submit} className='flex gap-5 flex-col justify-center'>
            <div className='grid gap-2'>
                <label className='text-sm text-gray-500'>Email</label>
                <input className='bg-gray-100 p-3.5 rounded focus:outline-none' name="email" type='email' defaultValue={`admin@email.com`} />
            </div>
            <div className='grid gap-2'>
                <label className='text-sm text-gray-500'>Senha</label>
                <input className='bg-gray-100 p-3.5 rounded focus:outline-none' name="password" type='password' defaultValue={`123456`} />
            </div>

            <div className='grid gap-2'>
                <button className='bg-red-600 text-white p-4 rounded' type='submit'>Login</button>
            </div>
        </form>
    )
}   