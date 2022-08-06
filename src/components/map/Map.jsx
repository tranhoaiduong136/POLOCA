import React, { useEffect, useState } from "react";
import "./map.css";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, child, get } from "firebase/database";
import { firebaseConfig } from "../../fire.js"
const indexcss = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
];

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const getData = ref(db);
const Map = (props) => {
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
      < img src="map.png" alt=""/>
      {data
        ? Object.keys(data).map((key, index) => {
            return (
              <button id={`patient-${indexcss[index]}`}>
                <span class="material-symbols-sharp" title={`Patient ${key}`}>
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

export default Map;
