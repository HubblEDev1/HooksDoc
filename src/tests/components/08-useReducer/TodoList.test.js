import { shallow } from "enzyme"
import { TodoList } from "../../../components/08-useReducer/TodoList"
import { demoTodos } from "../../fixtures/demoTodos"

describe('Testing todoList', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<TodoList
        state = {demoTodos}
        handleDelete = {handleDelete}
        handleToggle = {handleToggle}
    />);
    
    test('Take snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('It might 2 items', () => {
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
    });

})