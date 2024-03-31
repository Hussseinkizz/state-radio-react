import ReactHands from '../useReactContext';

export default function CounterA2() {
  const { useStore } = ReactHands();
  const [store, setStore] = useStore();

  return (
    <div>
      <h1>{store.count}</h1>
      <button
        onClick={() =>
          setStore((prevState) => ({
            ...prevState,
            count: prevState.count + 1,
          }))
        }>
        add +1
      </button>
    </div>
  );
}
