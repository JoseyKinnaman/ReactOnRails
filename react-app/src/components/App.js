import React from "react"
import "./App.css"
import Leaderboard from "../components/Leaderboard"

const App = () => (
  <main className="container" style={{ marginTop: 25 }}>
    <div className="row">
      <section className="col-md-7">
        <h1>Dunderball Leaderboard</h1>

        <Leaderboard />
      </section>
    </div>
  </main>
)

export default App
