import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    // { field: 'ID', headerName: '年分', width: 130 },
    // { field: 'category', headerName: '年分', width: 130 },
    // { field: 'name', headerName: '年分', width: 130 },
    { field: 'year', headerName: '年分', width: 130 },
    { field: 'ROE', headerName: 'ROE', width: 130 },
    { field: '基本每股收益', headerName: '基本每股收益', width: 180 },
    { field: '投資性現金流', headerName: '投資性現金流', width: 180 },
    { field: '每股現金流', headerName: '每股現金流', width: 150 },
    { field: '每股淨資產', headerName: '每股淨資產', width: 150 },
    { field: '淨利潤', headerName: '淨利潤', width: 150 },
    { field: '淨現金流', headerName: '淨現金流', width: 150 },
    { field: '營業性現金流', headerName: '營業性現金流', width: 180 },
    { field: '總利潤', headerName: '總利潤', width: 150 },
    { field: '總營收', headerName: '總營收', width: 150 },
    { field: '總負債', headerName: '總負債', width: 150 },
    { field: '總資產', headerName: '總資產', width: 150 },
    { field: '股份', headerName: '股份', width: 150 },
    { field: '股東權益合計', headerName: '股東權益合計', width: 180 },
    { field: '融資性現金流', headerName: '融資性現金流', width: 180 },
    { field: '負債率', headerName: '負債率', width: 150 },
]




const Data_table = ({ ID }) => {

    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:5000/company/view?company_id=" + ID,
            { method: 'GET', })
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data.companies);
                    setTableData(data.companies);

                },
                (error) => {
                    console.log(error);
                }
            )
    }, [])


    return (

        <DataGrid style={{ height: 400, width: '100%' }}
            getRowId={(tableData) => tableData.year}
            rows={tableData}
            columns={columns}
            pageSize={5}
        />

    )
}

Data_table.propTypes = {
    ID: PropTypes.string
}
export default Data_table;