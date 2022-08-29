export interface ITableData {
    date: number;
    value: number;
    notice: string;
}

export type TTableDataKeys = keyof ITableData;

export interface ITableColumn {
    columnTitle: string;
    tableDataAccessor: TTableDataKeys;
    isSortable: boolean;
}

export const tableData: ITableData[] = [
    {
        date: 1661694163000,
        value: 100,
        notice: 'Baseball ball',
    },
    {
        date: 1661695163000,
        value: 150,
        notice: 'Tennis ball',
    },
    {
        date: 1661696163000,
        value: 170,
        notice: 'Soccer ball',
    },
    {
        date: 1661697163000,
        value: 180,
        notice: 'Volleyball ball',
    },
    {
        date: 1661698163000,
        value: 200,
        notice: 'Football ball',
    },
    {
        date: 1661699163000,
        value: 220,
        notice: 'Table tennis ball',
    }
];

export const columns: ITableColumn[] = [
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
    }
];
