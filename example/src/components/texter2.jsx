import ReactHands from '../useReactContext';

const Texter2 = () => {
  const { useStore } = ReactHands();
  const [store, setStore] = useStore();

  return (
    <div>
      <h2>ABC: {store.text}</h2>
      <input
        type="text"
        value={store.text}
        onChange={(e) =>
          setStore((prevState) => ({ ...prevState, text: e.target.value }))
        }
      />
    </div>
  );
};

export default Texter2;
