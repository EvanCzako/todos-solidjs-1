import logo from './logo.svg';
import styles from './App.module.css';
import TodoContainer from './TodoContainer';
import { createSignal, For } from 'solid-js';
import store from './store';

function TodoListWrapper(props) {

    return (
        <div>
            {props.groupName}
            <ul>
                    <For each={props.todos}>{(todo, todoIdx) => {
                        return <TodoContainer todo={todo} idx={todoIdx()} groupName={props.groupName} groupIdx={props.groupIdx}/>
                    }
                }
                </For>
            </ul>
        </div>
    );
}

export default TodoListWrapper;
