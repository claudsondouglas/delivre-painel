import Link from "next/link";
import CreateProductForm from "@/partials/form-create-product";

export default async function Page() {
    return (
        <div className="px-20 py-20 flex flex-col gap-10">
            <div>
                <Link href={`/painel/cardapio`} className="text-gray-400 text-sm mb-3 inline-block">Voltar para o cardápio</Link>

                <h2 className="text-3xl font-semibold text-gray-700">
                    Adicionar produto
                </h2>
                <p className="text-gray-600">
                    Adicione por esta página detalhes do produto do seu cardápio.
                </p>
            </div>

            <div className="border-2 rounded-md">
                <div className="px-10 py-5 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-700">Informações do produto</h2>
                </div>

                <CreateProductForm 
                />
            </div>
        </div>
    )
}