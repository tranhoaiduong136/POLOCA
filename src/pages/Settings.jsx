import React from 'react'

// import { Link } from 'react-router-dom'

const Settings = () => {

    return (
        <div>
            <h2 className="page-header">Settings</h2>
                <div className="col-12">
                    <div className="card setting-card">
                      <div className="setting-item">
                        <span>Notification</span>
                        <div className="default-value">
                          <span>Every 1 hour</span>
                          <button>
                            <span className="material-symbols-outlined">arrow_forward_ios</span>
                          </button>
                        </div>
                      </div>
                      <div className="setting-item">
                        <span>Block</span>
                        <div className="default-value">
                          <button>
                            <span className="material-symbols-outlined">arrow_forward_ios</span>
                          </button>
                        </div>
                      </div>
                      <div className="setting-item">
                        <span>Contact us</span>
                        <div className="default-value">
                          <button>
                            <span className="material-symbols-outlined">arrow_forward_ios</span>
                          </button>
                        </div>
                      </div>
                      <div className="setting-item">
                        <span>Report</span>
                        <div className="default-value">
                          <button>
                            <span className="material-symbols-outlined">arrow_forward_ios</span>
                          </button>
                        </div>
                      </div>
                      <div className="setting-item">
                        <span>Privacy policy</span>
                        <div className="default-value">
                          <button>
                            <span className="material-symbols-outlined">arrow_forward_ios</span>
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
        </div>
    )
}

export default Settings
