import Sidebar from "@/partials/sidebar";

export default function PanelLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <>
        <main className="min-h-screen flex-col items-center justify-between grid grid-cols-12">
            <div className='col-span-3 relative bg-red-300 h-full'>
                <Sidebar />
            </div>
            <div className='col-span-9 min-h-screen'>
                {children}
            </div>
        </main>
        </>
    );
}