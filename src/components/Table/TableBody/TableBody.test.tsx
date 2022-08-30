import React from "react";
import {shallow, ShallowWrapper} from "enzyme";

import {ITableColumn, ITableData} from "../../../constants/tableData";

import TableBody from "./TableBody";

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

const data: ITableData[] = [
    {
        date: 1661699183000,
        value: 240,
        notice: 'Baseball test ball',
    },
    {
        date: 1661699153000,
        value: 220,
        notice: 'Football test ball',
    },
    {
        date: 1661699173000,
        value: 230,
        notice: 'Volleyball test ball',
    }
];

let component: ShallowWrapper<React.ReactElement<any, string | React.JSXElementConstructor<any>>>;

describe('TableBody component', () => {
    beforeEach(() => {
        component = shallow(<TableBody columns={columns} tableData={data}/>);
    });

    test('render the TableBody component without a crash', () => {
        expect(component).toMatchSnapshot();
    });

    test('render the TableBody component correctly', () => {
        expect(component.find('.table-data')).toHaveLength(9);
    });
});
