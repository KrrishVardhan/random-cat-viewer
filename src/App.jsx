import { useEffect, useState } from "react";

function App() {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCat = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/cats/cat/random"
      );

      const data = await response.json();

      setCat(data.data);
    } catch (error) {
      console.log("Error fetching cat:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Random Cat</h1>

      <img src={cat.image} alt={cat.name} width="300" />

      <h2>{cat.name}</h2>

      <p>{cat.origin}</p>

      <p>{cat.temperament}</p>

      <button onClick={fetchCat}>Get Another Cat</button>
    </div>
  );
}

export default App;