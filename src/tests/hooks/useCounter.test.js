import '../../setupTests';

import {renderHook, act} from '@testing-library/react-hooks';
import shallow from 'enzyme';
import { useCounter } from '../../hooks/useCounter';

describe('Testing Hooks', () => {
    test('Debe retornar los valores por defecto', () => {
        const {result} = renderHook(() => useCounter());

        console.log(result.current);

        expect(result.current.state).toBe(100);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('EL state debe ser 100', () => {
        const {result} = renderHook(() => useCounter(23));

        console.log(result.current);

        expect(result.current.state).toBe(23);
    });

    test('Debe de incrementar el counter en 1', () => {
        const {result} = renderHook(() => useCounter());
        const {increment, reset, decrement} = result.current;

        act( () => {
            increment();
            reset();
            decrement();
        });

        console.log(result.current);
        const { state } = result.current;
        expect( state ).toBe(99);
        
    });
})