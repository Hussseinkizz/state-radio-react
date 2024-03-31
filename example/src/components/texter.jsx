import { useChannel } from 'state-radio-react';
import { abcChannel } from '../store';

const Texter = () => {
  const [text, setText] = useChannel(abcChannel);

  return (
    <div>
      <h2>ABC: {text}</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Texter;
