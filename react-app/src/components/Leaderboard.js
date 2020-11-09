import React, { useState, useEffect } from "react";
import EntryForm from "../components/EntryForm";
import '../components/Leaderboard.css';

const Leaderboard = () => {
const [loading, setLoading] = useState(true);
const [entry, setEntry] = useState({});


useEffect(() => {
  setLoading(true)
  async function getScores(){
    const response = await fetch('http://localhost:3000/api/scores');
    if (response.status !== 200){
      alert("The server in the warehouse server is down again. Please be try again later...did I stutter?!")
    } else {
    const body = await response.json();
    let entries = Object.keys(body).map(function(key){
      return body[key]}).sort((a,b) => b.score - a.score);
      setEntry(entries)
      setLoading(false);
    }
  }
getScores();
}, [])


const sortByFirstName = () =>{
  const entryByFirstName = entry.slice().sort((a,b) => {
    return a.firstName.localeCompare(b.firstName);
    });
  setEntry(entryByFirstName);
};

const sortByFirstNameDescending = () =>{
  const entryByFirstName = entry.slice().sort((a,b) => {
    return b.firstName.localeCompare(a.firstName);
    });
  setEntry(entryByFirstName);
};

const sortByLastName = () =>{
  const entryByLastName = entry.slice().sort((a,b) => {
    return a.lastName.localeCompare(b.lastName);
  });
  setEntry(entryByLastName);
};

const sortByLastNameDescending = () =>{
  const entryByLastName = entry.slice().sort((a,b) => {
    return b.lastName.localeCompare(a.lastName);
  });
  setEntry(entryByLastName);
};

const sortByLowScore = () =>{
  const entryByLowScore = entry.slice().sort((a,b) => a.score - b.score)
  setEntry(entryByLowScore);
};

const sortByHighScore = () =>{
  const entryByHighScore = entry.slice().sort((a,b) => b.score - a.score)
  setEntry(entryByHighScore);
};

return (
  <div className="ui segment">
    {loading
    ?
    <div className="ui active inverted dimmer">
    <div className="ui text loader">Loading</div>
    </div>
      :
      <div>
      <table className="table">
      <tbody>
        {entry.map((e) => (
          <tr key={e.id}>
            <td >{e.firstName}</td>
            <td >{e.lastName}</td>
            <td >{e.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="ui icon buttons">
      <div className="ui primary icon button" onClick={sortByFirstName}>
        First Name
        <i className="sort alphabet down icon" />
      </div>
      <div className="ui secondary icon button" onClick={sortByFirstNameDescending}>
        Last Name
        <i className="sort alphabet up icon" />
      </div>
      <div className="ui primary icon button" onClick={sortByLastName}>
        Last Name
        <i className="sort alphabet down icon" />
      </div>
      <div className="ui secondary icon button" onClick={sortByLastNameDescending}>
        Last Name
        <i className="sort alphabet up icon"/>
      </div>
    </div>
    <div className="ui icon buttons">
      <div className="ui positive icon button" onClick={sortByHighScore}>
        <i className="sort amount down icon" />
      </div>
      <div className="ui negative icon button" onClick={sortByLowScore}>
        <i className="sort amount up icon" />
      </div>
    </div>
      <EntryForm setEntry={()=>setEntry} entry={entry}/>
    </div>
    }
  </div>
  );
}

export default Leaderboard
