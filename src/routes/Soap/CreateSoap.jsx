import React, { useState } from 'react';
import NoImageSelected from "../../assets/no-image-selected.jpeg";

function CreateSoap() {
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [image, setImage] = useState(NoImageSelected);
    const [percentSuperFat, setPercentSuperFat] = useState("");
    const [ingredient1, setIngredient1] = useState("");
    const [ingredient2, setIngredient2] = useState("");
    const [ingredient3, setIngredient3] = useState("");
    const [ingredient4, setIngredient4] = useState("");
    const [ingredient5, setIngredient5] = useState("");
    const [ingredient6, setIngredient6] = useState("");
    const [ingredient7, setIngredient7] = useState("");
    const [ingredient8, setIngredient8] = useState("");
    const [amount1, setAmount1] = useState(0);
    const [amount2, setAmount2] = useState(0);
    const [amount3, setAmount3] = useState(0);
    const [amount4, setAmount4] = useState(0);
    const [amount5, setAmount5] = useState(0);
    const [amount6, setAmount6] = useState(0);
    const [amount7, setAmount7] = useState(0);
    const [amount8, setAmount8] = useState(0);

    // lyeCalculation: {
    //   minimumWaterNeeded: 10.03,
    //   sodiumHydroxide: 4.3,
    // },
    // totalOilsWeight: 28.9,
    // totalRecipeWeight: 43.22,
    // totalBarsAvail: 0,
    // notes:

    const [costPerBar, setCostPerBar] = useState(0);
    const [costPerPound, setCostPerPound] = useState(0);
    const [addCostToGiftWrapPerBar, setAddCostToGiftWrapPerBar] = useState(0);
    const [category, setCategory] = useState([]);

    const createSoap = async(e) => {
      e.preventDefault();
      console.table([name, slug])

      try {
        const response = await fetch("http:///localhost:8000/api/soap", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            slug: slug,
            // image,
          }),
        })

        if(response.ok) {
          setName("");
          setSlug("");
        } else {
          console.log("Failed to submit data");
        }
      } catch(error) {
          console.log("Failed to submit data");
      }
    }

  return (
    <div>
      <h1>Create a new Soap Recipe</h1>

      <form className="soapDetails" onSubmit={createSoap}>
        <div className="col-1">
          <label>Upload Image</label>
          <img src={NoImageSelected} alt="preview image" />
          <input type="file" accept='image/jpeg, image/gif, image/png' />
        </div>

        <div>
          <div className="col-2">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="col-3">
            <label>Slug</label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
            />
          </div>

          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default CreateSoap
