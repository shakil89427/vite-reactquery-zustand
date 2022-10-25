import create from "zustand";

const useCounter = create((set, get) => ({
  value: 1,
  increament: () => {
    const { value } = get();
    value < 10 && set({ value: value + 1 });
  },
  decreament: () => {
    const { value } = get();
    value > 1 && set({ value: value - 1 });
  },
}));

export default useCounter;
