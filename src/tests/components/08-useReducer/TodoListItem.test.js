import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem"
import { demoTodos } from "../../fixtures/demoTodos";

describe('Test <TodoListItem/>', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<TodoListItem 
        item = {demoTodos[0]}
        id = {0}
        handleDelete = {handleDelete}
        handleToggle={handleToggle}
    />);

    test('Component snapshot', () => {
        //snapshot
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Call Delete function', () => {
        //jest.fn()
        //toHaveBeenCalled
        //toHaveBeenCalledWith
        wrapper.find('button').simulate('click');
        //expect(handleDelete).toHaveBeenCalled();
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
        console.log(wrapper.html());
    });
    
    test('Call the toggle function', () => {
        //jest.fn() 
        //toHaveBeenCalledWith
        
        wrapper.find('p').simulate('click');
        
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
        console.log(wrapper.html());
        
    })
    
    test('Should show the text correctly', () => {
        //Paragraph content
        //wrapper.find('p').simulate('click');
        expect(wrapper.find('p').text().trim()).toBe(`1. ${demoTodos[0].desc}`);
    })



});