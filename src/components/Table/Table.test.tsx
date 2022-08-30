import React from "react";
import {shallow} from "enzyme";

import {ITableColumn, ITableData} from "../../constants/tableData";

import Table from "./Table";

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
        date: 1661699193000,
        value: 250,
        notice: 'Table test ball',
    },
    {
        date: 1661699153000,
        value: 200,
        notice: 'Tennis test ball',
    },
    {
        date: 1661699163000,
        value: 240,
        notice: 'Soccer test ball',
    }
];

describe('Table component', () => {
    test('render the Table component without a crash', () => {
        const component =  shallow(<Table columns={columns} data={data}/>);

        expect(component).toMatchSnapshot();
    });
});
