import { mount, shallow } from "enzyme";
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Testing <RealExampleRef/>', () => {
    const user = {
        name: 'Edwin',
        email: 'edwin@example.com'
    }
    
    const wrapper = mount(
        <UserContext.Provider value = {{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('MatchSnapshot', () => {
        expect(wrapper).toMatchSnapshot();  
    });

})