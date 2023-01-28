import "./App.css";
import List from "./components/List";
import { useState } from "react";
import data from "./data";

function App() {
  const [birthdayList, setBirthdayList] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>Front Beginners</h3>
        <h3>
          {birthdayList.length > 1
            ? birthdayList.length + "aniversários hoje"
            : birthdayList.length + "aniversário hoje"}
        </h3>
        <List birthdayList={birthdayList} />
        <button onClick={() => setBirthdayList([])}>Limpar Lista</button>
      </section>
    </main>
  );
}

export default App;
