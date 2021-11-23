import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe('Testing todoList', () => {
    const handleAddTodo = jest.fn();
    
    const wrapper = shallow(<TodoAdd
        handleAddTodo = {handleAddTodo}    
    />);
    
    test('Take snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Not call handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        //console.log(wrapper.find('form').prop('onSubmit'));
        formSubmit({preventDefault(){}});

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('call handleAddTodo', () => {
        const input = wrapper.find('input');
        
        const value = 'Learn ...';

        //1.- Simular el inputChange,
        input.simulate('change', {target: {
            value,
            name: 'description'
        }});
        
        //2.- Simular el submit 
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});        
        //console.log(wrapper.find('form').prop('onSubmit'));
        //formSubmit({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });   
        expect(wrapper.find('input').prop('value')).toBe(''); 
    });
})