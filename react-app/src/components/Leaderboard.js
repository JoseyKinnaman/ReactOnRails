import React, { useState, useEffect } from "react";
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
  setEntry(entries)
  console.log(entries)
  setLoading(false);
  }
getScores();
}, []);

 return (
   <div>
  {loading
  ?
  <div >Loading</div>
    :
    <table className="table">
    <tbody>
      {entry.map((e) => (
      <tr>
        <td>{e[0]}</td>
        <td>{e[1]}</td>
        <td>{e[2]}</td>
      </tr>
      ))}
    </tbody>
  </table>
  }
  </div>
  );
}

export default Leaderboard
