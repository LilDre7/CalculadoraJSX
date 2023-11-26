import { create } from "zustand";

const useCounter = create((set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: () => set((state) => ({ counter: state.counter - 1 })),
  reboot: () => set({ counter: 0 }),
}));

const useCalculadora = create((set) => ({
  currentDigit: " ",
  setCurrentDigit: (value) => set({ currentDigit: value }),
  deleteDigit: () => set({ currentDigit: " " }),
  deleteOneDigit: () =>
    set((state) => ({ currentDigit: state.currentDigit.slice(0, -1) })),
}));

export { useCounter, useCalculadora };
