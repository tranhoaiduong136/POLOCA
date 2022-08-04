import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import Map from '../components/map/Map'

const Dashboard = () => {

    return (
        <div>
            <h2 className="page-header">Patients Tracking</h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__header">
                            <h3>map</h3>
                        </div>
                        <div className="card__body">
                            <Map />
                        </div>
                        <div className="card__footer">
                            <span>University Medical Center, Ho Chi Minh City</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
