import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import { getProfiles } from "./clients/hasura";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const data = await getProfiles();
      setIsLoading(false);
      setProfiles(data.profiles);

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="App">
      {!!isLoading && <p>loading</p>}
      {!isLoading &&
        profiles.map((profile) => <h1 key={profile.id}>{profile.name}</h1>)}
    </div>
  );
}

export default App;
