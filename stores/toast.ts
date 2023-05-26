import { create } from 'zustand'

const toastStore = create((set) => ({
    open: 0,
    toast: { title: '', description: '' },
    toggle: (toast: any) => set((state: any) => ({ 
        open: !state.open,
        toast: toast
    })),
}))

export default toastStore;