import React, { useState, useEffect } from "react";
// import EntryForm from "../components/EntryForm";
import '../components/Leaderboard.css';

const Leaderboard = () => {
const [loading, setLoading] = useState(true);
const [entry, setEntry] = useState({});
const [user, setUser] = useState([]);



useEffect(() => {
  setLoading(true)
  async function getScores(){
    const response = await fetch('http://localhost:3000/api/scores');
    if (response.status !== 200){
      alert("The server in the warehouse server is down again. Please be try again later...did I stutter?!")
    } else {
    const body = await response.json();
    let entries = Object.keys(body).map((key) => {
      return body[key]}).sort((a,b) => b.score - a.score);
      setEntry(entries)
      setLoading(false);
    }
  }
getScores();
}, [])

const handleSubmit = (e) => {
  e.preventDefault()
  e.target.reset();
  fetch('http://localhost:3000/api/scores', {
    method: 'POST',
    body: JSON.stringify(user),
  })
  .then(res => res.json())
  .then(json => setUser(json.user))
  const newScore = {...user}
  if(entry.reduce((prev, current) => (prev.score > current.score) ? prev : current).score < user.score){
      console.log(`With a score of ${user.score}, ${user.firstName} is the new high score!`)
  }
  const newEntry = entry.slice();
  newEntry.push(newScore)
  setEntry(newEntry.sort((a,b) => b.score - a.score));
}


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
  console.log(entryByHighScore)
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
          <tr key={e.firstName}>
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
    <h2>Add an Entry</h2>
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={e => setUser({ ...user, firstName: e.target.value })}
          required
        />
      </div>
      <div className="field">
      <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={e => setUser({ ...user, lastName: e.target.value })}
          required
        />
      </div>
      <div className="field">
        <label>Score</label>
          <input
            type="number"
            name="score"
            className="three wide field"
            placeholder="Score"
            onChange={e => setUser({ ...user, score: parseInt(e.target.value) })}
            required
            min = "0"
            max="100"
          />
      </div>
      <button className="ui button" type="submit">Submit</button>
    </form >
    </div>
    }
  </div>
  );
}

export default Leaderboard
