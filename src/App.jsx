import "./App.css";
import useUsersQuery from "./hooks/queries/useUsersQuery";
import useCounterStore from "./Store/useCounterStore";

function App() {
  const store = useCounterStore();
  const { data, error, isLoading, isError } = useUsersQuery(store.value);

  if (isLoading) {
    return <p>Loading</p>;
  }
  if (isError) {
    console.log(error);
  }

  return (
    <div className="App">
      <p>{store.value}</p>
      <button onClick={store.decreament}>-</button>
      <button onClick={store.increament}>+</button>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

export default App;
