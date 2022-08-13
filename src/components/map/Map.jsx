import React, { useEffect, useState } from "react";
import "./map.css";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, child, get } from "firebase/database";
import { firebaseConfig } from "../../fire.js"
import "../../home.css"
// const indexcss = [
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
// ];
const place = [
  {lon: 53 , lat : 50},
  {lon: 49, lat : 51},
  {lon: 48 , lat : 53.5},
  {lon: 49.5 , lat : 52.5},
  {lon: 49 , lat : 50}
]
const place2 = [
  {lon: 51 , lat : 54},
  {lon: 54 , lat : 54},
  {lon: 52 , lat : 55},
  {lon: 53 , lat : 53},
  {lon: 48 , lat : 53.5}
]
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const getData = ref(db);
const Maps = (props) => {
  const {setActiveRow} = props;
  const [data, setData] = useState();
  const [data2,setData2] = useState();

  const [room, setRoom] = useState();
  const [room2, setRoom2] = useState();
  // console.log(data);
  useEffect(() => {
    const fetchData = () => {
      get(child(getData, "Beacon1/Patient")).then((snapshot) => {
        const fetched = snapshot.val();
        console.log(fetched);
        setData(fetched);
      });
      get(child(getData, "Beacon1/Room")).then((snapshot) => {
        const fetched = snapshot.val();
        console.log(fetched);
        setRoom(fetched);
      });
    };
    const fetchData2 = () => {
      get(child(getData, "Beacon2/Patient")).then((snapshot) => {
        const fetched = snapshot.val();
        console.log(fetched);
        setData2(fetched);
      });
      get(child(getData, "Beacon2/Room")).then((snapshot) => {
        const fetched = snapshot.val();
        console.log(fetched);
        setRoom2(fetched);
      });
    };
    // fetch data
    fetchData();
    fetchData2();
    onValue(getData, (snapshot) => {
      fetchData();
      fetchData2();
    });
  }, []);
  // let i = 1;
  return (
    <div className="map-card">
      {/* <iframe style = {{
        userSelect : "none"
      }} src="https://www.google.com/maps/d/embed?mid=1CAV2v-aKFCZslnankxaZjzqTpBg&ehbc=2E312F&z=18" width="100%" height="800" zoom= "1.3" title = "mapbachkhoa">
      </iframe> */}
      < img src="mapbachkhoa.png" alt=""/>
      
      {data?
        Object.keys(data).map((key, index) => {
            return (
              <button style = {{
                top : `${place[index].lon}%`,
                right : `${place[index].lat}%`
              }} key={index} onClick={() => setActiveRow(index)}>
                <span className="material-symbols-sharp" title={`Patient ${key}`}>
                  person_pin_circle
                </span>
                <span>
                  Id: {key}
                  <br />
                  Room: {room ? room : "None"}
                  <br />
                  <b
                    className={
                      data[key] === '1' ? "normal" : (data[key] === '2' )?"n-normal":
                      (data[key] === '3') ?"crit" : (data[key] === '4')?"una" :""
                    }
                  >
                    { data[key] === '1'? "Normal" : (data[key] === '2' )?"Not Normal":
                    (data[key] === '3') ?"Critical" : (data[key] === '4')?"Unavailable" :"None"}
                  </b>
                </span>
              </button>
            );
          })
        : ""}
      {data2?
        Object.keys(data2).map((key, index) => {
            return (
              <button style = {{
                top : `${place2[index].lon}%`,
                right : `${place2[index].lat}%`
              }} key={index} onClick={() => setActiveRow(index)}>
                <span className="material-symbols-sharp" title={`Patient ${key}`}>
                  person_pin_circle
                </span>
                <span>
                  Id: {key}
                  <br />
                  Room: {room2 ? room2 : "None"}
                  <br />
                  <b
                    className={
                      data2[key] === '1' ? "normal" : (data2[key] === '2' )?"n-normal":
                      (data2[key] === '3') ?"crit" : (data2[key] === '4')?"una" :""
                    }
                  >
                    { data2[key] === '1'? "Normal" : (data2[key] === '2' )?"Not Normal":
                    (data2[key] === '3') ?"Critical" : (data2[key] === '4')?"Unavailable" :"None"}
                  </b>
                </span>
              </button>
            );
          })
        : ""}
      
    </div>
  );
};

export default Maps;
