import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function SingleSoap() {
  const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/soaps`;
  const [data, setData] = useState([]);
  const urlSlug = useParams();

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/${urlSlug.slug}`);
        // console.log("Response", response)

        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
            console.log(error);
      }
    };

    fetchData();
  }, []);

 return (
   <div>
     {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

     <Link to={"/soaps"}>🔙 Soap</Link>

     <div className="soapdetails">
       <div className="col-1">
         <h1>{data.name}</h1>
         <img src={data.image} alt={data.title} />
       </div>

       <div className="col-2">
         <h2>Ingredients</h2>
         <h4>{data.ingredients.ingredient1}</h4>
         <h4>{data.ingredients.ingredient2}</h4>
         <h4>{data.ingredients.ingredient3}</h4>
         <h4>{data.ingredients.ingredient4}</h4>
         <h4>{data.ingredients.ingredient5}</h4>
         <h4>{data.ingredients.ingredient6}</h4>
         <h4>{data.ingredients.ingredient7}</h4>
         <h4>{data.ingredients.ingredient8}</h4>
       </div>

       {/* <div className="col-2"> */}
         {/* <h2>Lye Calculation</h2> */}
         {/* <h4>{data.lyeCalculation.minimumWaterNeeded}</h4> */}
         {/* <h4>{data.lyeCalculation.sodiumHydrocide}</h4> */}
       {/* </div> */}
     </div>
   </div>
 );
};

export default SingleSoap;