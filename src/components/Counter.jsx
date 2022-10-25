import useCounter from "../features/stores/useCounter";

const Counter = () => {
  const { increament, decreament } = useCounter();

  return (
    <div>
      <button onClick={decreament}>-</button>
      <button onClick={increament}>+</button>
    </div>
  );
};

export default Counter;
