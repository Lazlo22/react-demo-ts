import React from "react";
import {shallow, ShallowWrapper} from "enzyme";

import {ITableColumn} from "../../../constants/tableData";

import TableHead from "./TableHead";

const columns: ITableColumn[] = [
    {
        columnTitle: 'Date',
        tableDataAccessor: 'date',
        isSortable: true
    },
    {
        columnTitle: 'Value',
        tableDataAccessor: 'value',
        isSortable: true
    },
    {
        columnTitle: 'Notice',
        tableDataAccessor: 'notice',
        isSortable: false
    },
];

const clickFn = jest.fn();
let component: ShallowWrapper<React.ReactElement<any, string | React.JSXElementConstructor<any>>>;

describe('TableHead component', () => {
    beforeEach(() => {
        component = shallow(<TableHead columns={columns} handleTableSort={clickFn}/>);
    });

    test('render the TableHead component without a crash', () => {
        expect(component).toMatchSnapshot();
    });

    test('render the TableHead component correctly', () => {
        expect(component.find('.table-head-data')).toHaveLength(3);
    });

    test('render the TableHead component without a crash', () => {
        component.find('.table-head-data-sortable').forEach((item) => item.simulate('click'));

        expect(clickFn).toHaveBeenCalled();
        expect(clickFn.mock.calls.length).toBe(2)
    });
});
