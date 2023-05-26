'use client';

import axios from "axios";
import { useState } from "react";
import useCookie from "@/lib/useCookie";
import toastStore from "@/stores/toast";

export default function UpdateProductForm({ name, description, price, id }: {
    name: string,
    description: string,
    price: string,
    id?: string
}) {
    const [formName, setFormName] = useState(name);
    const [formDescription, setFormDescription] = useState(description);
    const [formPrice, setFormPrice] = useState(price);
    const toggle = toastStore((state: any) => state.toggle);

    function handleInputName(e: any) {
        setFormName(e.target.value);
    }

    function handleInputDescription(e: any) {
        setFormDescription(e.target.value);
    }

    function handleInputPrice(e: any) {
        setFormPrice(e.target.value);
    }

    async function submitForm(e: any) {
        e.preventDefault();

        const response = await axios.patch(`http://localhost:3001/product/${id}`, {
            name: formName,
            description: formDescription,
            price: parseFloat(formPrice)
        }, {
            headers: {
                "Authorization": 'Bearer ' + useCookie('token'),
            }
        })

        if (response.status === 200) {
            toggle({
                title: 'sucesso!',
                description: 'Produto atualizado com sucesso!',
            })  
        } else {

        }
    }

    return (
        <form onSubmit={submitForm} className="px-10 grid gap-5 mb-8">
            <div className="flex flex-col gap-2 max-w-screen-md">
                <label className='text-sm text-gray-500'>Nome</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className='bg-gray-100 p-3.5 rounded focus:outline-none'
                    value={formName}
                    onInput={handleInputName}
                    required />
            </div>

            <div className="flex flex-col gap-2 max-w-screen-md">
                <label className='text-sm text-gray-500'>Detalhes</label>
                <textarea
                    name="name"
                    id="name"
                    className='bg-gray-100 p-3.5 rounded focus:outline-none resize-none h-[150px]'
                    value={formDescription}
                    onInput={handleInputDescription}
                    required></textarea>
            </div>

            <div className="flex flex-col gap-2 max-w-screen-md">
                <label className='text-sm text-gray-500'>Preço unitário</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className='bg-gray-100 p-3.5 rounded focus:outline-none'
                    value={formPrice}
                    onInput={handleInputPrice}
                    required />
            </div>
            <div className="grid max-w-screen-md">
                <button className={`${(formName === '' || formName != name) ||
                    (formDescription === '' || formDescription != description) ||
                    (formPrice === '' || formPrice != price) ?
                    'bg-red-600' : 'bg-gray-300'} text-white p-4 rounded duration-300`} type='submit'>
                    Salvar alterações
                </button>
            </div>
        </form>
    )
}