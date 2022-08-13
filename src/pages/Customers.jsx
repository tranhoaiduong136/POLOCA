import React, { useState } from "react";

import Table from "../components/table/Table";

import customerList from "../assets/JsonData/customers-list.json";

import Modal from "react-modal";

const customerTableHead = [
  "ID",
  "Name",
  "Gender",
  "Room",
  "Status",
  "Last Time Check",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const Customers = (props) => {
  const {activeRow} = props;
  const [modalIsOpen, setIsOpen] = useState(false);
  const renderBody = (item, index) => (
    <tr key={index} className={activeRow === index?'active-row':''}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.gender}</td>
      <td>{item.room}</td>
      <td> <span className={item.status === "Normal"? "normal":(item.status === "Not Normal")? "n-normal"
        :(item.status === "Critical")? "crit":(item.status === "Unavailable")? "una":""}>{item.status}</span></td>
      <td>
        {new Date().getHours() +
          ":" +
          new Date().getMinutes() +
          ":" +
          new Date().getSeconds() +
          " " +
          new Date().getFullYear() +
          "-" +
          (new Date().getMonth() + 1) +
          "-" +
          new Date().getDate()}
      </td>
    </tr>
  );
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <div
        className="row"
        style={{
          display: "flex",
          height: "max-content",
          justifyContent: "space-between",
          paddingRight: 15,
          paddingLeft: 15,
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <h2 style={{ margin: 0 }} className="page-header">
          patients
        </h2>
        <button
          style={{
            height: "max-content",
            backgroundColor: "#349eff",
            color: "#fff",
            padding: 15,
            borderRadius: 15,
            fontSize: 17,
          }}
          onClick={openModal}
        >
          Add new customer
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              border: "none",
              boxShadow: "0 5px 18px #00000028",
              borderRadius: 20,
            },
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <h2>Add new customer</h2>
            <button
              style={{
                backgroundColor: "#349eff",
                color: "#fff",
                height: 35,
                width: 35,
                padding: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
              }}
              onClick={closeModal}
            >
              &#10006;
            </button>
          </div>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <label
              htmlFor="Name"
              style={{
                marginBottom: 5,
                fontSize: 16,
              }}
            >
              Name:
            </label>
            <input name="Name" placeholder={"name"} style={{marginBottom: 10, border: '1px solid #0002', fontSize: 16, borderRadius: 5}}/>
            <label
              htmlFor="Id"
              style={{
                marginBottom: 5,
                fontSize: 16,
              }}
            >
              Poloband Id:
            </label>
            <input name="Id" placeholder={"id"} style={{marginBottom: 10, border: '1px solid #0002', fontSize: 16, borderRadius: 5}}/>

            <label
              htmlFor="Gender"
              style={{
                marginBottom: 5,
                fontSize: 16,
              }}
            >
              Gender:
            </label>
            <select name="Gender" placeholder={"gender"} style={{marginBottom: 20, border: '1px solid #0002', fontSize: 16, borderRadius: 5}}>
            <option value="None">None</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            </select>
            <button 
              style={{
                backgroundColor: "#349eff",
                color: "#fff",
                height: 35,
                padding: 10,
                borderRadius: "50%",
                margin: '0 auto',
              }}
              type="submit" disabled
            >
                Add patient
            </button>
          </form>
        </Modal>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit="10"
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
  );
};

export default Customers;
