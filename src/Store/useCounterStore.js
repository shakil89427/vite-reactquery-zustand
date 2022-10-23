import create from "zustand";
import { persist } from "zustand/middleware";

const useCounterStore = create(
  persist(
    (set) => ({
      value: 0,
      increament: () => set((prev) => ({ value: prev.value + 1 })),
      decreament: () => set((prev) => ({ value: prev.value - 1 })),
    }),
    { name: "counter1" }
  )
);

export default useCounterStore;
