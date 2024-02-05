import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Soap() {
  const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/soaps`;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {

        let url = baseUrl;
        if ( selectedCategory) {
          url += `?category=${selectedCategory}`
        }

        const response = await fetch(url);

        console.log("Response", response)

        if (!response.ok) {
          throw new Error("Failed to fetch data.  SOAP.jsx");
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

    return (
      <div>
        <h1>Soaps</h1>
        <p>
          This is where we use NodeJs, Express & MongoDB to grab some data. The
          data below is pulled from a MongoDB database.
        </p>

        <h2>Fetch example</h2>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> this will display just the json data*/}


      <div>
        <label>Categories</label>
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All</option>
          <option value="fragrant">Fragrant</option>
          <option value="exfoliating">Exfoliating</option>
          <option value="nourishing">Nourishing</option>
        </select>
      </div>

        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (

          <ul className="books">
            {data.map((soap) => (
              <li key={soap._id}>
                <Link to={`/soaps/${soap.slug}`}>
                  <img src={`${soap.image} alt={soap.name}`} />
                  <h3>{soap.name}</h3>
                </Link>
              </li>
            ))}
          </ul>
        )}

      </div>
    );
  };

export default Soap;