import FormLogin from '@/partials/form-login'

export default function Home() {
    return (
        <main className="min-h-screen flex-col items-center justify-between grid grid-cols-12">
            <div className='col-span-4 flex gap-5 flex-col justify-center px-20'>
                <FormLogin />
            </div>
            <div className='col-span-8 bg-red-600 h-screen'></div>
        </main>
    )
}
