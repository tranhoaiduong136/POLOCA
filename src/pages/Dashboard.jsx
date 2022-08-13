import React,{useState} from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Map from '../components/map/Map'

import Table from '../components/table/Table'

// import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'
import customerList from '../assets/JsonData/customers-list.json'

const chartOptions = {
    series: [{
        name: 'Diagnoses',
        data: [40, 50, 80, 90, 40, 80, 45, 51, 60, 30]
    }, {
        name: 'Treatments',
        data: [25, 34, 73, 80, 40, 36, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            toolbar: {
              show: true,
              offsetX: 0,
              offsetY: 0,
              tools: {
                download: true,
                selection: true,
                zoom: false,
                zoomin: true,
                zoomout: true,
                pan: false,
                reset: false
              }
            },
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'bottom'
        },
        grid: {
            show: false
        }
    }
}

const topCustomers = {
    head: [
        'Patient',
        'Days',
        'Note'
    ]
    // body: [
    //   {"username":"Nguyen Ngoc Quyet","medicine":"Atenolol","time":"30/05/2022"},
    //   {"username":"Le Kim Toan","medicine":"Squash Zucchini","time":"26/03/2022"},
    //   {"username":"Nguyen Chi Cong","medicine":"Xyntha","time":"20/05/2022"},
    //   {"username":"Trieu Phuoc Nhan","medicine":"Diaper Rash Paste","time":"30/04/2022"},
    //   {"username":"Ho Trong Duy","medicine":"Flavoxate Hydrochloride","time":"02/02/2022"},
    // ]
}


const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)


// const latestOrders = {
//     header: [
//         "order id",
//         "user",
//         "total price",
//         "date",
//         "status"
//     ],
//     body: [
//         {
//             id: "#OD1711",
//             user: "john doe",
//             date: "17 Jun 2021",
//             price: "$900",
//             status: "shipping"
//         },
//         {
//             id: "#OD1712",
//             user: "frank iva",
//             date: "1 Jun 2021",
//             price: "$400",
//             status: "paid"
//         },
//         {
//             id: "#OD1713",
//             user: "anthony baker",
//             date: "27 Jun 2021",
//             price: "$200",
//             status: "pending"
//         },
//         {
//             id: "#OD1712",
//             user: "frank iva",
//             date: "1 Jun 2021",
//             price: "$400",
//             status: "paid"
//         },
//         {
//             id: "#OD1713",
//             user: "anthony baker",
//             date: "27 Jun 2021",
//             price: "$200",
//             status: "refund"
//         }
//     ]
// }

// const orderStatus = {
//     "shipping": "primary",
//     "pending": "warning",
//     "paid": "success",
//     "refund": "danger"
// }

// const renderOrderHead = (item, index) => (
//     <th key={index}>{item}</th>
// )

// const renderOrderBody = (item, index) => (
//     <tr key={index}>
//         <td>{item.id}</td>
//         <td>{item.user}</td>
//         <td>{item.price}</td>
//         <td>{item.date}</td>
//         <td>
//             <Badge type={orderStatus[item.status]} content={item.status}/>
//         </td>
//     </tr>
// )

const Dashboard = () => {
    const [activeRow, setActiveRow] = useState(false);
    const themeReducer = useSelector(state => state.ThemeReducer.mode)
    
    const renderCusomerBody = (item, index) => (
        <tr key={index} className={activeRow === index?'active-row':''}>
            <td>{item.name}</td>
            <td>{item.days}</td>
            {/* <td> <span className={item.status === "Normal"? "normal":(item.status === "Not Normal")? "n-normal"
            :(item.status === "Critical")? "crit":(item.status === "Unavailable")? "una":""}>{item.status}</span></td> */}
            <td>{item.note}</td>
        </tr>
    )
    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6 col-md-12">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div title={item.description} className="col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6 col-md-12">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-4 col-md-12">
                    <div className="card">
                        <div className="card__header">
                            <h3>Remarkable Online Patients</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                activeRow = {activeRow}
                                headData={topCustomers.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                bodyData={customerList}
                                renderBody={(item, index) => renderCusomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/patients'>view all</Link>
                        </div>
                    </div>
                </div>
                <div className="col-8 col-md-12">
                    <div className="card">
                        <div className="card__header">
                            <h3>map</h3>
                        </div>
                        <div className="card__body">
                            {/*<Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />*/}
                            <Map setActiveRow = {setActiveRow}/>
                        </div>
                        <div className="card__footer">
                            <Link to='/track'>view map</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
