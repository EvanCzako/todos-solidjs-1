import { createStore } from 'redux'

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object. It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */

const initState = [
        {
            todos: [
                {
                    text: "Pet the kitty",
                    completed: false
                },
                {
                    text: "Turn my swag on",
                    completed: true
                }
            ],
            groupName: "a"
        },
        {
            todos: [
                {
                    text: "Eat food",
                    completed: false
                },
                {
                    text: "Drink water",
                    completed: true
                }
            ],
            groupName: "b"
        }
    ]

function mainReducer(state = initState, action) {
    switch (action.type) {
        case 'modifyTodo':
            const newTodo = {
                ...state[action.groupIdx].todos[action.idx]
            };
            newTodo.completed = !newTodo.completed;
            const newTodos = [...state[action.groupIdx].todos];
            newTodos[action.idx] = newTodo;
            const newTodosObj = {
                todos: newTodos,
                groupName: state[action.groupIdx].groupName
            }
            const newState = [...state];
            newState[action.groupIdx] = newTodosObj;
            return newState;
        default:
            return state;
        }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(mainReducer)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

store.subscribe(() => console.log(store.getState()))

export default store;