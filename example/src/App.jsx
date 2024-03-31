import CounterA from './components/counterA';
import CounterB from './components/counterB';
import Texter from './components/texter';
import { ToDo } from './components/todo';

function App() {
  return (
    <section className="container">
      <h1>hello react</h1>
      <Texter />
      <ToDo />
      <CounterA />
      <CounterB />
    </section>
  );
}

export default App;
