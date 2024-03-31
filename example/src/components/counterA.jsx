import { countChannel } from '../store';
import { useChannel } from 'state-radio-react';

export default function CounterA() {
  const [count, setCount] = useChannel(countChannel);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>add +1</button>
    </div>
  );
}
