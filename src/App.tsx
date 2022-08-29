import React from 'react';

import {tableData, columns} from "./constants/tableData";

import Button from "./components/Button/Button";
import Table from "./components/Table/Table";

import './App.scss';

const App = () => {
    return (
        <div className="App">
            <div className='button-container'>
                <Button title='press me!'/>
            </div>
            <div className='table-container'>
                <Table
                    data={tableData}
                    columns={columns}
                />
            </div>
        </div>
    );
};

export default App;
