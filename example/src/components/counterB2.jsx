import ReactHands from '../useReactContext';

export default function CounterB2() {
  const { useStore } = ReactHands();
  const [store, setStore] = useStore();

  return (
    <div>
      <h1>{store.count}</h1>
      <button
        onClick={() =>
          setStore((preveState) => ({
            ...preveState,
            count: preveState.count - 1,
          }))
        }>
        minus -1
      </button>
    </div>
  );
}
