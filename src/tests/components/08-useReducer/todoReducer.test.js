import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en todoReducer', () => {
    test('Should return a default state', () => {
        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);
    })

    test('Should return a default state', () => {
        const state = todoReducer(demoTodos, {type: 'add', payload: {
            id: demoTodos.length+1,
            desc: 'Learn AWS',
            done: false}});

        expect(state.length).toBe(3);
    })

    test('Should delete a todo', () => {
        const state = todoReducer(demoTodos, {type: 'delete', payload: 3});

        expect(state.length).toBe(2);
    })

    test('Should toggle a todo', () => {
        const state = todoReducer(demoTodos, {type: 'toggle', payload: 1});

        //console.log(state);
        expect(state[0].done).toBe(true);
    })
})