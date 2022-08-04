import React from 'react'

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/customers-list.json'

const customerTableHead = [
    '',
    'name',
    'medicine',
    'location',
    'treatment start'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.medicine}</td>
        <td>{item.location}</td>
        <td>{item.time}</td>
    </tr>
)

const Customers = () => {
    return (
        <div>
            <h2 className="page-header">
                patients
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customerList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers
