import React, { useState, useEffect } from "react";
import '../components/Leaderboard.css'

const Leaderboard = () => {
const [loading, setLoading] = useState(true);
const [score, setScore] = useState([]);
const [firstName, setFirstName] = useState();
const [lastName, setLastName] = useState();


useEffect(() => {
  setLoading(true)
  async function getCategory(){
  const response = await fetch('http://localhost:3000/api/scores')
  const body = await response.json();
  console.log(body);
  // let categories = [];
  // body.forEach(({category}) => {categories.push(category)});
  // let singleCategories = [...new Set(categories)].map((category) => ({
  //   value: category
  // }));
  console.log (body[1].firstName)
  setScore(body[1].score)
  setFirstName(body[1].firstName)
  setLastName(body[1].lastName)
  setLoading(false);
  }
getCategory();
}, []);

 return (
  <table className="table">
    <thead>
      {/* <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Score</th>
      </tr> */}
    </thead>
    <tbody>
      <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{score}</td>
      </tr>
      {/* <tr>
        <td>Name</td>
        <td>Placeholder</td>
        <td>20</td>
      </tr> */}
    </tbody>
  </table>
  );
}

export default Leaderboard
