import Link from "next/link";
import CardapioItem from "@/partials/cardapio-item";

export default async function Page() {
    const products: any = await getProducts();

    return (
        <div className="px-20 py-10">
            <div className="mb-10">
                <h2 className="text-3xl font-semibold text-gray-700">
                    Cardápio
                </h2>
                <p className="text-gray-600">
                    Gerencie por esta página os produtos cadastrados no seu cardápio.
                </p>
            </div>
            <div className="border-2 rounded-md">
                <div className="px-10 py-5 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-700">Items</h2>
                    <Link href="/painel/produto/adicionar" className="bg-red-600 text-white px-10 py-3">
                        Adicionar produto
                    </Link>
                </div>
                <div className="border-t-2">
                    {
                        products.map((product: any, index: number) => (
                            <CardapioItem key={index} index={index} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}


async function getProducts() {
    const res = await fetch('http://localhost:3001/product', {
        cache: 'no-cache',
    });

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}