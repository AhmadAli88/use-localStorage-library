
import useLocalStorage from "use-local-storage";

const CounterApp = () => {
  // Using useLocalStorage hook
  const [count, setCount] = useLocalStorage("counter", 0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount((prev) => Number(prev) + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => Number(prev) - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default CounterApp;
