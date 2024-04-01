import { create } from 'zustand';

export const useStore = create((set) => ({
    count: 0,
    increaseCount: () => set((state) => ({ count: state.const + 1 })),
    resetCount: () => set({ count: 0 }),
    updateCount: (newCount) => set({ count: newCount })
}));
