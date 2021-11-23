import { shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Testing todoApp', () => {
    
    const wrapper = shallow(<TodoList/>);

    test('It toMatchSnapshot',() => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Add Todo',() => {
        const wrapper = mount(<TodoApp />)

        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        })

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp ( 2 )');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);

    })
    
    test('Delete Todo',() => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0].id);
        

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp ( 0 )');
        
    })

})