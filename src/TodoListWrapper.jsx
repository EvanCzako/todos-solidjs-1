import logo from './logo.svg';
import styles from './App.module.css';
import TodoContainer from './TodoContainer';

function TodoListContainer() {
  return (
    <div class={styles.App}>
      <ul>
        <TodoContainer/>
      </ul>
    </div>
  );
}

export default TodoListContainer;
