import React from "react";
import Card from "@components/Card";
import "@styles/main.css";

import { useEffect, useState } from "react";
import getData from "@services/getData";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result || []); // 👈 evita null
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
   <div>
    {data.map((item, index) => (
      <Card key={index} user={item} />
    ))}
  </div>
  );
};

export default Home;
