import { StateRadio } from 'state-radio-react';

const { channels } = new StateRadio();

export const countChannel = channels.addChannel('count', 0);

export const abcChannel = channels.addChannel('abc', 'abc');

countChannel.subscribe((newCount) => {
  console.log('Count Changed to:', newCount);
});

abcChannel.subscribe((newState) => {
  console.log('ABC Changed to:', newState);
});
