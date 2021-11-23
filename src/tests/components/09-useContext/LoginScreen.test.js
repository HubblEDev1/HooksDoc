import { mount, shallow } from "enzyme";
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Testing <RealExampleRef/>', () => {
    const user = {
        id: 'Edwin',
        email: 'edwin@example.com'
    }
    
    
    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value = {{
            user,
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('MatchSnapshot', () => {
        expect(wrapper).toMatchSnapshot();  
    });

    test('Should execute the setUser with the argument expected', () => {
        //console.log(wrapper.find('button').prop('onClick'));
        //wrapper.find('button').simulate('click');
        wrapper.find('button').prop('onClick')();
        expect(setUser).toHaveBeenCalledWith(user);
        
    })

})