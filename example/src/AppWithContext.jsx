import CounterA2 from './components/counterA2';
import CounterB2 from './components/counterB2';
import Texter2 from './components/texter2';
import { ToDo2 } from './components/todo2';
import ReactHands from './useReactContext';

function AppWithContext() {
  const { StoreProvider } = ReactHands();

  let initialState = {
    count: 0,
    text: 'abc',
    tasks: [],
    filter: 'all',
  };

  return (
    <StoreProvider initialState={initialState}>
      <section className="container">
        <h1>hello react</h1>
        <Texter2 />
        <ToDo2 />
        <CounterA2 />
        <CounterB2 />
      </section>
    </StoreProvider>
  );
}

export default AppWithContext;
