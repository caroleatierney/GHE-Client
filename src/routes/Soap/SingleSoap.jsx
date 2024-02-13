import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function SingleSoap() {
  const [data, setData] = useState([]);
  const urlSlug = useParams();
  const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/soaps/${
    urlSlug.slug}`;

  useEffect(() => {
    console.log("In use effect");
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);
        console.log("Response", response);

        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        const jsonData = await response.json();
        setData(jsonData);
        console.log("JSON Data", jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <Link to={"/soaps"}>🔙 Soap</Link>

      <div className="soapDetails">
        <div className="col-1">
          <h1>{data?.name}</h1>
          <img src={data?.image} alt={data?.title} />
          <Link to={`/editSoap/${data.slug}`}>Edit Soap</Link>
        </div>

        <div className="col-2">
          <h2>Ingredients</h2>
          <p>{data?.ingredients.ingredient1}</p>
          <p>{data?.ingredients.ingredient2}</p>
          <p>{data?.ingredients.ingredient3}</p>
          <p>{data?.ingredients.ingredient4}</p>
          <p>{data?.ingredients.ingredient5}</p>
          <p>{data?.ingredients.ingredient6}</p>
          <p>{data?.ingredients.ingredient7}</p>
          <p>{data?.ingredients.ingredient8}</p>
        </div>

        <div>
          <h4>Super Fat: {data?.percentSuperFat} %</h4>
          <h4>Add cost to gift wrap bar: ${data?.addCostToGiftWrapPerBar}</h4>
          <h4>Lye calculation: {data?.lyeCalculation}</h4>
        </div>
      </div>
    </div>
  );
}

export default SingleSoap;
