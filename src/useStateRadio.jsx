import { useRef, useState, useEffect } from 'react';

export function useChannel(channel) {
  let newChannelRef = useRef(channel);

  const [state, setState] = useState(newChannelRef.current.getState());

  useEffect(() => {
    let callback = () => {
      newChannelRef.current.subscribe((newState) => setState(newState));
    };
    callback();
    return newChannelRef.current.unSubscribe(callback);
  }, []);

  return [state, newChannelRef.current.setState];
}
