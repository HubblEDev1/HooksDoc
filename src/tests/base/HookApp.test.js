import {shallow} from 'enzyme';
import { HookApp } from '../../HookApp';

import '../../setupTests';

describe('Testing Hooks', () => {
    test('Testing HookApp', () => {
        const wrapper = shallow(<HookApp/>);

        expect(wrapper).toMatchSnapshot();
    })
})