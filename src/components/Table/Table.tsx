import React from 'react';

import {ITableColumn, ITableData} from "../../constants/tableData";
import {useTableSort} from "../../hooks/useTableSort";

import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";

import './Table.scss';

interface ITable {
    data: ITableData[];
    columns: ITableColumn[];
}

const Table = ({data, columns}: ITable) => {
    const [tableData, handleTableSort] = useTableSort(data);

    return (
        <table className='table'>
            <TableHead
                columns={columns}
                handleTableSort={handleTableSort}
            />
            <TableBody
                columns={columns}
                tableData={tableData}
            />
        </table>
    );
};

export default Table;
