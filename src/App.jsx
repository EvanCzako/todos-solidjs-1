import logo from './logo.svg';
import styles from './App.module.css';
import TodoContainer from './TodoContainer';

function App() {
  return (
    <div class={styles.App}>
      <TodoContainer/>
    </div>
  );
}

export default App;
