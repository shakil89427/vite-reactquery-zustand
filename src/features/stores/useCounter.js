import create from "zustand";
import { persist } from "zustand/middleware";

const initials = (set, get) => ({
  value: 1,
  increament: () => {
    set(({ value }) => ({ value: value < 10 ? value + 1 : value }));
  },
  decreament: () => {
    set(({ value }) => ({ value: value > 1 ? value - 1 : value }));
  },
});

const useCounter = create(persist(initials, { name: "counter" }));

export default useCounter;
