import React, { useState, useEffect } from "react";
import EntryForm from "../components/EntryForm"
import '../components/Leaderboard.css'

const Leaderboard = () => {
const [loading, setLoading] = useState(true);
const [entry, setEntry] = useState([]);
// const [firstName, setFirstName] = useState();
// const [lastName, setLastName] = useState();


useEffect(() => {
  setLoading(true)
  async function getScores(){
    const response = await fetch('http://localhost:3000/api/scores')
    const body = await response.json();
    let entries = [];
      body.forEach((x => {entries.push([x.firstName, x.lastName, x.score])}));
    const sortedEntries = entries.sort((a,b) => b[2] - a[2]);
    setEntry(sortedEntries)
    setLoading(false);
  }
getScores();
}, []);

const sortByFirstName = () =>{
   const entryByFirstName = entry.sort((a,b) => {
     return a[0].localeCompare(b[0]);
    });
   setEntry(entryByFirstName);
   console.log(entryByFirstName)
};

const sortByLastName = () =>{
  const entryByLastName = entry.sort((a,b) => {
    return a[1].localeCompare(b[1]);
   });
  setEntry(entryByLastName);
  console.log(entryByLastName)
};

const sortByLowScore = () =>{
  const entryByLowScore = entry.sort((a,b) => a[2] - b[2])
  setEntry(entryByLowScore);
  console.log(entryByLowScore)
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
        <td >{e[0]}</td>
        <td >{e[1]}</td>
        <td >{e[2]}</td>
      </tr>
      ))}
    </tbody>
  </table>
  <div className="ui button" onClick={sortByFirstName} >Sort by First Name</div>
    <br />
  <div className="ui primary button" onClick={sortByLastName}>Sort by Last Name</div>
   <br />
  <div className="ui secondary button" onClick={sortByLowScore}>Sort by Score</div>
    <br />
  <EntryForm />
  </div>
  }
  </div>
  );
}

export default Leaderboard
