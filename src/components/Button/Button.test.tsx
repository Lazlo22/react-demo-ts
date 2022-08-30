import {shallow} from "enzyme";

import Button from "./Button";

const BUTTON_TITLE = 'press me!';

describe('Button component', () => {
    test('render the Button component without a crash', () => {
        const component = shallow(<Button title={BUTTON_TITLE}/>);

        expect(component).toMatchSnapshot();
    });
});
