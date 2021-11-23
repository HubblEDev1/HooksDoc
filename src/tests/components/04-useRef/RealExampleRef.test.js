import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef"

describe('Testing <RealExampleRef/>', () => {
    test('MatchSnapshot', () => {
        const wrapper = shallow(<RealExampleRef/>);
        expect(wrapper.toMatchSnapshot());
        console.log(wrapper.html());
    });

    test('Show the component <MultipleCustomHooks', () => {
        const wrapper = shallow(<RealExampleRef/>);
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHook').exists()).toBe(true);
        //console.log(wrapper.html());
    })
})