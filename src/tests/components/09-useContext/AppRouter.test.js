import { mount, shallow } from "enzyme";
import { AppRouter } from "../../../components/09-useContext/AppRouter";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Testing <RealExampleRef/>', () => {
    const user = {
        id: 1,
        email: 'edwin@example.com'
    }

    const wrapper = mount(<
        UserContext.Provider value={{user}}>
            <AppRouter/>
        </UserContext.Provider>
    )

    test('MatchSnapshot', () => {
        expect(wrapper).toMatchSnapshot();  
    });

})