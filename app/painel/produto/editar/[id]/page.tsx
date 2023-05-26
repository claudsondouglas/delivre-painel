import Link from "next/link";
import UpdateProductForm from "@/partials/form-update-product";

export default async function Page({
    params: { id }
}: {
    params: {
        id: string
    }
}) {
    let product: any = await getProduct(id);

    return (
        <div className="px-20 py-20 flex flex-col gap-10">
            <div>
                <Link href={`/painel/cardapio`} className="text-gray-400 text-sm mb-3 inline-block">Voltar para o cardápio</Link>

                <h2 className="text-3xl font-semibold text-gray-700">
                    Editar produto
                </h2>
                <p className="text-gray-600">
                    Gerencie por esta página detalhes do produto do seu cardápio.
                </p>
            </div>

            <div className="border-2 rounded-md">
                <div className="px-10 py-5 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-700">{product.name}</h2>
                </div>

                <UpdateProductForm 
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                />
            </div>
        </div>
    )
}


async function getProduct(id: string) {
    const res = await fetch(`http://localhost:3001/product/${id}`, {
        cache: 'no-cache',
    });

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}