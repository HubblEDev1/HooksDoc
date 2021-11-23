import '../../setupTests';

import {renderHook, act} from '@testing-library/react-hooks';
import shallow from 'enzyme';
import { useCounter } from '../../hooks/useCounter';
import { useForm } from '../../hooks/useForm';
import { FormWithCustomHook } from '../../components/02-useEffect/FormWithCustomHook';

describe('Testin useForm', () => {
    const initialForm = {
        name: 'edwin',
        email: 'edwin@example.com'
    }
    
    test('Return a default form', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;


        expect( values ).toEqual(initialForm);
        
        /*const { state } = result.current;
        expect( state ).toBe(99);*/
    });

    test('Change name value', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;

        act( (initialForm) => {
            handleInputChange({target : {
                name: 'name', 
                value: 'Ed'
            }});
        });
        
        const [values] = result.current;
        expect( values ).toEqual({name: 'Ed', email: 'edwin@example.com' });
              
    });

    test('re-stablished the form (RESET)', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;

        act( (initialForm) => {
            handleInputChange({target : {
                name: 'name', 
                value: 'Ed'
            }});

            reset();
        });
        
        const [values] = result.current;
        console.log(values);
        expect( values ).toEqual({name: 'edwin', email: 'edwin@example.com' });
              
    });
})