'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import toastStore from "@/stores/toast";
import useCookie from "@/lib/useCookie";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";

export default function CardapioItem({ product, index } : any) {
    const toggle = toastStore((state: any) => state.toggle);
    const [show, setShow] = useState(true);

    async function remove(index: number) {
        const response = await axios.delete(`http://localhost:3001/product/${product.id}`, {
            headers: {
                "Authorization": 'Bearer ' + useCookie('token'),
            }
        })

        if (response.status === 200) {
            toggle({
                title: 'sucesso!',
                description: 'Produto editado com sucesso!',
            });
            setShow(false);
        } else {

        }
    }

    if (!show) return null;;

    return (
        <div className="py-3 border-b-2 last:border-b-0 px-10 grid items-center grid-cols-12 hover:font-bold odd:bg-slate-50">
            <div className="col-span-10">
                {product.name}
            </div>
            <div className="col-span-1">
                R${product.price.toFixed(2)}
            </div>
            <div className="col-span-1 flex justify-end">
                <DropdownMenu>
                    <DropdownMenuTrigger><i className="uil uil-ellipsis-v text-2xl"></i></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <Link href={`/painel/produto/editar/${product.id}`}>
                                Editar
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem><span onClick={() => remove(index)}>Apagar</span></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}