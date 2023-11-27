import { create } from "zustand";
import * as math from "mathjs";

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
  addDigit: (value) =>
    set((state) => ({ currentDigit: state.currentDigit + value })),
  resultOperation: () =>
    set((state) => ({
      currentDigit: math.evaluate(state.currentDigit.replace(/x/g, "*")),
    })),
}));

export { useCounter, useCalculadora };
