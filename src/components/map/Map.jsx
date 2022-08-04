import React from 'react'
import './map.css'
// Import the functions you need from the SDKs you need
// import app from "../../fire.js";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue} from "firebase/database";

const id = [
  1234, 2345, 3456, 4567, 5678, 6789, 7890
]
const status = [
  'available', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable'
]
const firebaseConfig = {
  apiKey: "AIzaSyCZV-SoLDJbf5kU82kZV7JbocvtNcYpjWY",
  authDomain: "polocaserver-ea3d5.firebaseapp.com",
  databaseURL: "https://polocaserver-ea3d5-default-rtdb.firebaseio.com",
  projectId: "polocaserver-ea3d5",
  storageBucket: "polocaserver-ea3d5.appspot.com",
  messagingSenderId: "966440476448",
  appId: "1:966440476448:web:7a673da9868caff7684145"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const test = ref(db, 'Beacon1/Patient/1234');
onValue(test, (snapshot) => {
  status[0] = (snapshot.val() == "true")? "available" : "unavailable";
  return (
    <button id="patient-one"><span class="material-symbols-sharp" title="Patient 1">person_pin_circle</span><span>Id: {id[0]}<br/>Room: 3<br/><b className={status[0]}>{status[0]}</b></span></button> 
  )
});


const Map = props => {
  return (
      <div className='map-card'>
        <img src="map.png"/>
        <button id="patient-one"><span class="material-symbols-sharp" title="Patient 1">person_pin_circle</span><span>Id: {id[0]}<br/>Room: 3<br/><b className={status[0]}>{status[0]}</b></span></button>
        <button id="patient-two"><span class="material-symbols-sharp" title="Patient 2">person_pin_circle</span><span>Id: {id[1]}<br/>Room: 4<br/><b className="patient-status unavailable">unavailable</b></span></button>
        <button id="patient-three"><span class="material-symbols-sharp" title="Patient 3">person_pin_circle</span><span>Id: {id[2]}<br/>Room: 3<br/><b className="patient-status unavailable">unavailable</b></span></button>
        <button id="patient-four"><span class="material-symbols-sharp" title="Patient 4">person_pin_circle</span><span>Id: {id[3]}<br/>Room: 5<br/><b className="patient-status unavailable">unavailable</b></span></button>
        <button id="patient-five"><span class="material-symbols-sharp" title="Patient 5">person_pin_circle</span><span>Id: {id[4]}<br/>Room: 6<br/><b className="patient-status unavailable">unavailable</b></span></button>
        <button id="patient-six"><span class="material-symbols-sharp" title="Patient 6">person_pin_circle</span><span>Id: {id[5]}<br/>Room: 5<br/><b className="patient-status unavailable">unavailable</b></span></button>
        <button id="patient-seven"><span class="material-symbols-sharp" title="Patient 7">person_pin_circle</span><span>Id: {id[6]}<br/>Room: 3<br/><b className="patient-status unavailable">unavailable</b></span></button>
      </div>
  )
}

export default Map