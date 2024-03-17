import logo from './logo.svg';
import styles from './App.module.css';
import store from "./store";

function TodoContainer(props) {

    console.log(props);
  
    return (
        <div>
            <div style={{
                'text-decoration': props.todo.completed ? 'line-through' : undefined,
            }}>
                {props.todo.text}
            </div>
            <input type="checkbox" checked={props.todo.completed} onChange={() => {
                store.dispatch({
                    type: "modifyTodo",
                    idx: props.idx,
                    groupIdx: props.groupIdx
                });
            }}/>
        </div>
    );
}

export default TodoContainer;
