import {useState} from "react";

import {ITableData, TTableDataKeys} from "../constants/tableData";

export type TSortFields = 'asc' | 'desc';
export type TSortFunction = (sortField: TTableDataKeys, sortOrder: TSortFields) => void;

export const useTableSort = (data: ITableData[]): [ITableData[], TSortFunction] => {
    const [tableData, setTableData] = useState<ITableData[]>(data);

    const handleSorting = (sortField: TTableDataKeys, sortOrder: TSortFields) => {
        const sortedData = [...tableData].sort((firstItem, secondItem) => {

            return (
                firstItem[sortField].toString().localeCompare(secondItem[sortField].toString(), "en", {
                    numeric: true,
                }) * (sortOrder === 'asc' ? 1 : -1)
            );
        });

        setTableData(sortedData);
    };

    return [tableData, handleSorting];
};
