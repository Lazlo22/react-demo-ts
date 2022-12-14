import React from "react";

import {ITableColumn, ITableData} from "../../../constants/tableData";
import {convertUnixToDayMonthYearTime} from "../../../utils/date";

import './TableBody.scss';

interface ITableBody {
    tableData: ITableData[];
    columns: ITableColumn[];
}

const TableBody = ({tableData, columns}: ITableBody) => {
    return (
        <tbody>
        {tableData.map((tableDataItem, index) => (
                <tr key={index}>
                    {columns.map(({tableDataAccessor}) => {
                        const tableData = tableDataItem[tableDataAccessor] || '';
                        const isDateItem = tableDataAccessor === 'date';

                        return (
                            <td
                                key={tableDataAccessor}
                                className='table-data'
                            >
                                {isDateItem ? convertUnixToDayMonthYearTime(tableData as number) : tableData}
                            </td>
                        );
                    })}
                </tr>
            )
        )}
        </tbody>
    );
};

export default TableBody;
