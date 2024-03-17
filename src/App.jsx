import logo from './logo.svg';
import styles from './App.module.css';
import TodoContainer from './TodoContainer';
import TodoListWrapper from "./TodoListWrapper";
import store from "./store";
import { createSignal, For } from 'solid-js';

function App() {

  console.log(store.getState());

  return (
    <div class={styles.App}>
      <For each={store.getState()}>{(todoList, groupIdx) => {
        return <TodoListWrapper groupName={todoList.groupName} todos={todoList.todos} groupIdx={groupIdx()}/>
        }
      }
      </For>
    </div>
  );
}

export default App;
