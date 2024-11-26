import './App.css';
import CounterApp from './components/CounterApp';
import PersistentForm from './components/PersistentForm';
import ShoppingCart from './components/ShoppingCart';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div>
      <CounterApp />
      <ThemeToggle/>
      <PersistentForm/>
      <ShoppingCart/>
    </div>
  );
}

export default App;
