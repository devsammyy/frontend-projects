import React from "react";

const Tables = () => {
    return (
        <div className='table-container'>
            <h1>Records</h1>
            <table className='table'>
                <tr>
                    <th>S/N</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>

                <tr>
                    <td>1</td>
                    <td>Airtime</td>
                    <td>2-10-2022</td>
                    <td>N200</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>GoTV</td>
                    <td>3-10-2022</td>
                    <td>N5000</td>
                </tr>
            </table>
        </div>
    );
};

export default Tables;
