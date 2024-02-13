import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function SingleSoap() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const urlSlug = useParams();
  const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/soaps/${urlSlug.slug}`;

  useEffect(() => {
    console.log("In use effect");
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);
        // console.log("Response", response);

        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      } 
    };
    fetchData();
  }, []);

  if (isLoading || data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="soapDetails">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <div className="col-1">
        <h1>{data.name}</h1>
        <img src={data?.image} alt={data?.name} />
        <div className="soapDetails">
          <Link to={"/soaps"}>🔙 Soap</Link>
          <Link to={`/editSoap/${data?.slug}`}>Edit Soap</Link>
        </div>
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
      <div className="col-2">
        <h2>Amounts</h2>
        <p>{data?.ingredients.amount1}</p>
        <p>{data?.ingredients.amount2}</p>
        <p>{data?.ingredients.amount3}</p>
        <p>{data?.ingredients.amount4}</p>
        <p>{data?.ingredients.amount5}</p>
        <p>{data?.ingredients.amount6}</p>
        <p>{data?.ingredients.amount7}</p>
        <p>{data?.ingredients.amount8}</p>
      </div>

      <div>
        <h2>Lye calculation</h2>
        <p>Minimum water needed: {data?.lyeCalculation.minimumWaterNeeded}</p>
        <p>Sodium Hydroxide: {data?.lyeCalculation.sodiumHydroxide}</p>
      </div>

      <div>
        <h2>Other</h2>
        <p>Super Fat: {data?.percentSuperFat}%</p>
        <p>Total Oils by Weight: {data?.totalOilsWeight}%</p>
        <p>Total recipe weight: {data?.totalRecipeWeight}%</p>
        <p>Personal Notes: {data?.notes}%</p>
      </div>

      <div>
        <h2>Category</h2>
        <ul>
          {data?.category?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Purchase information</h2>
        <p>Total bars available: {data?.totalBarsAvail}%</p>
        <p>Cost per bar: {data?.costPerBar}</p>
        <p>Cost per pound: {data?.costPerPound}</p>
        <p>Cost to Giftwrap: {data?.addCostToGiftWrapPerBar}</p>
      </div>
    </div>
  );
}

export default SingleSoap;



