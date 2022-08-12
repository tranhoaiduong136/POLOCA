import React, { useEffect, useState } from "react";
import "./map.css";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, child, get } from "firebase/database";
import { firebaseConfig } from "../../fire.js"

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
  {lon: 45 , lat : 61},
  {lon: 50 , lat : 65},
  {lon: 52 , lat : 40},
  {lon: 45 , lat : 57},
  {lon: 60 , lat : 60}
]
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const getData = ref(db);
const Maps = (props) => {
  const {setActiveRow} = props;
  const [data, setData] = useState();
  const [room, setRoom] = useState();
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
    // fetch data
    fetchData();
    onValue(getData, (snapshot) => {
      fetchData();
    });
  }, []);
  return (
    <div className="map-card">
      {/* <iframe style = {{
        userSelect : "none"
      }} src="https://www.google.com/maps/d/embed?mid=1CAV2v-aKFCZslnankxaZjzqTpBg&ehbc=2E312F&z=18" width="100%" height="800" zoom= "1.3" title = "mapbachkhoa">
      </iframe> */}

      < img src="mapbachkhoa.png" alt=""/>
      {data
        ? Object.keys(data).map((key, index) => {
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
                      data[key] === "true" ? "available" : "unavailable"
                    }
                  >
                    {data[key] === "true" ? "available" : "unavailable"}
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
