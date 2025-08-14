import { observer } from 'mobx-react-lite';
import { counterStore } from './CounterStore';
import './App.css';

const CounterValue = observer(() => {
  return <h2>Count: {counterStore.count}</h2>;
});

const CounterButtons = () => {
  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
      <button onClick={() => counterStore.increment()}>
        Increment
      </button>
      <button onClick={() => counterStore.decrement()}>
        Decrement
      </button>
      <button onClick={() => counterStore.reset()}>
        Reset
      </button>
    </div>
  );
};

const DivisibleByThree = observer(() => {
  return (
    <div style={{ marginTop: '10px' }}>
      <p>Divided by 3: {counterStore.isDivisibleByThree ? 'yes' : 'no'}</p>
    </div>
  );
});

const App = observer(() => {
  return (
    <div className="App">
      <h1>MobX + React + TypeScript</h1>
      <div className="card" style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        <CounterValue />
        <DivisibleByThree />
        <hr style={{ margin: '20px 0' }} />
        <CounterButtons />
      </div>
    </div>
  );
});

export default App;
