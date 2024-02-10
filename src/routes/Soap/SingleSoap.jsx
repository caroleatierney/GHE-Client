import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function SingleSoap() {
  const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/soaps`;
  const [data, setData] = useState([]);
  const urlSlug = useParams();

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}${urlSlug.slug}`);
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
     {/* <pre>{JSON.stringify(data, null, 2)}</pre>  */}

     <Link to={"/soaps"}>🔙 Soap</Link>

     <div className="soapdetails">
       <div className="col-1">1</div>

       <div className="col-2">2</div>
     </div>
   </div>
 );
};

export default SingleSoap;