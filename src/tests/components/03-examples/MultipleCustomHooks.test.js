import React from 'react';
import {shallow} from 'enzyme';
import { MultipleCustomHook } from '../../../components/03-examples/MultipleCustomHook';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

//Simulating the component's hooks
jest.mock('../../hooks/useFetch');//It allows us to create an altern useFetch result
jest.mock('../../hooks/useCounter');


describe('Testing <MultipleCustomHook/>', () => {

    test('Should snapshot', () => {


        useCounter.mockReturnValue({
            state: 100,
            increment: () => {}
        });

        useFetch.mockReturnValue({
            data: null, loading: true, error: null
        });

        const wrapper = shallow(<MultipleCustomHook />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Should show data', () => {
        useCounter.mockReturnValue({
            state: 101,
            increment: () => {}
        });        
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Edwin Valdez', 
                quote: 'Hi everyone'
            }], 
            loading: false, 
            error: null
        });

        const wrapper = shallow(<MultipleCustomHook />);
        expect(wrapper.find('alert').exists()).toBe(false);
        //expect(wrapper.find('mb-0').text().trim()).toBe('Hi everyone');
        expect(wrapper.find('footer').text().trim()).toBe('Edwin Valdez');

        console.log(wrapper.html);

    })


})
