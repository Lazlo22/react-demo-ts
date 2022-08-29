import React, {useState} from "react";

import {ITableColumn, TTableDataKeys} from "../../../constants/tableData";
import {TSortFields, TSortFunction} from "../../../hooks/useTableSort";

import './TableHead.scss';

interface ITableHead {
    columns: ITableColumn[];
    handleTableSort: TSortFunction;
}

const TableHead = ({columns, handleTableSort}: ITableHead) => {
    const [sortField, setSortField] = useState<TTableDataKeys>('date');
    const [order, setOrder] = useState<TSortFields>('asc');

    const handleSort = (accessor: TTableDataKeys, isSortable: boolean) => {
        if (!isSortable) return;

        const sortOrder: TSortFields = accessor === sortField && order === "asc" ? "desc" : "asc";

        setSortField(accessor);
        setOrder(sortOrder);
        handleTableSort(accessor, sortOrder);
    };

    return (
        <thead className='table-head'>
        <tr>
            {columns.map(({columnTitle, tableDataAccessor, isSortable}) => (
                    <th
                        key={columnTitle}
                        onClick={() => handleSort(tableDataAccessor, isSortable)}
                        className={`table-head-data ${isSortable ? 'table-head-data-sortable' : ''}`}
                    >
                        {columnTitle}
                    </th>
                )
            )}
        </tr>
        </thead>
    );
};

export default TableHead;
