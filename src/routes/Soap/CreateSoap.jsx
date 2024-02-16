import React, { useState } from "react";
import NoImageSelected from "../../assets/no-image-selected.jpeg";

function CreateSoap() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState(NoImageSelected);
  const [percentSuperFat, setPercentSuperFat] = useState(undefined);
 
  const [totalOilsWeight, setTotalOilsWeight] = useState(undefined);
  const [totalRecipeWeight, setTotalRecipeWeight] = useState(undefined);
  const [lyeCalculation, setLyeCalculation] = useState({
    minimumWaterNeeded: undefined,
    sodiumHydroxide: undefined,
  });

  const [totalBarsAvail, setTotalBarsAvail] = useState(undefined);
  const [notes, setNotes] = useState("");
  const [costPerBar, setCostPerBar] = useState(undefined);
  const [costPerPound, setCostPerPound] = useState(undefined);
  const [addCostToGiftWrapPerBar, setAddCostToGiftWrapPerBar] = useState(undefined);
  const [category, setCategory] = useState([]);

  const [ingredients, setIngredients] = useState({
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
    ingredient5: "",
    ingredient6: "",
    ingredient7: "",
    ingredient8: "",
    amount1: undefined,
    amount2: undefined,
    amount3: undefined,
    amount4: undefined,
    amount5: undefined,
    amount6: undefined,
    amount7: undefined,
    amount8: undefined,
  });

  const [submitted, setSubmitted] = useState(false);

  const createSoap = async (e) => {
    e.preventDefault();
    // console.table([name, slug])

    try {
      const response = await fetch("http://localhost:8000/api/soap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          slug: slug,
          image: NoImageSelected,
          ingredients: ingredients,
          category: category,
          notes: notes,
        }),
      });

      if (response.ok) {
        setName("");
        setSlug("");
        setSubmitted(true);
      } else {
        console.log("Failed to submit data");
      }
    } catch (error) {
      console.log("Failed to submit data");
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value.split(",").map((category) => category.trim()));
  };

  const handleIngredientsChange = (e) => {
    setIngredients({
      ...ingredients,
      [e.target.name]: e.target.value,
    });
  };

  const handleLyeCalculation = (e) => {
    setLyeCalculation({
      ...lyeCalculation,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Create a new Soap Recipe</h1>

      {submitted ? (
        <p>Data submitted successfully</p>
      ) : (
        <form className="soapDetails" onSubmit={createSoap}>
          <div>
            <div className="soapDetails">
              <div className="col-1">
                <label>Upload Image</label>
                <img src={NoImageSelected} alt="preview image" />
                <input type="file" accept="image/jpeg, image/gif, image/png" />
              </div>

              <div>
                <div className="col-2">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <label>Slug</label>
                  <input
                    type="text"
                    placeholder="Slug"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                  />
                </div>

                <div>
                  <label>Categories (comma-separated)</label>
                  <input
                    type="text"
                    value={category}
                    placeholder="Categories"
                    onChange={handleCategoryChange}
                  />
                </div>
              </div>
            </div>
            <div className="soapDetails">
              <div>
                <label>Ingredients</label>
                <input
                  type="text"
                  name="ingredient1"
                  placeholder="Ingredient 1"
                  value={ingredients.ingredient1}
                  onChange={(e) => handleIngredientsChange}
                />
                <input
                  type="text"
                  name="ingredient2"
                  placeholder="Ingredient 2"
                  value={ingredients.ingredient2}
                  onChange={(e) => handleIngredientsChange}
                />
                <input
                  type="text"
                  name="ingredient3"
                  placeholder="Ingredient 3"
                  value={ingredients.ingredient3}
                  onChange={(e) => handleIngredientsChange}
                />
                <input
                  type="text"
                  name="ingredient4"
                  placeholder="Ingredient 4"
                  value={ingredients.ingredient4}
                  onChange={(e) => handleIngredientsChange}
                />
                <input
                  type="text"
                  name="ingredient5"
                  placeholder="Ingredient 5"
                  value={ingredients.ingredient5}
                  onChange={(e) => handleIngredientsChange}
                />
                <input
                  type="text"
                  name="ingredient6"
                  placeholder="Ingredient 6"
                  value={ingredients.ingredient6}
                  onChange={(e) => handleIngredientsChange}
                />
                <input
                  type="text"
                  name="ingredient7"
                  placeholder="Ingredient 7"
                  value={ingredients.ingredient7}
                  onChange={(e) => handleIngredientsChange}
                />
                <input
                  type="text"
                  name="ingredient8"
                  placeholder="Ingredient 8"
                  value={ingredients.ingredient8}
                  onChange={(e) => handleIngredientsChange}
                />
              </div>
              <div>
                <label>Amounts</label>
                <input
                  type="text"
                  name="amount1"
                  placeholder="Amount 1"
                  value={ingredients.amount1}
                  onChange={(e) => handleIngredientsChange}
                />
                <input
                  type="text"
                  name="amount2"
                  placeholder="Amount 2"
                  value={ingredients.amount2}
                  onChange={(e) => handleIngredientsChange}
                />
                <input
                  type="text"
                  name="amount3"
                  placeholder="Amount 3"
                  value={ingredients.amount3}
                  onChange={(e) => handleIngredientsChange}
                />
                <input
                  type="text"
                  name="amount4"
                  placeholder="Amount 4"
                  value={ingredients.amount4}
                  onChange={(e) => handleIngredientsChange}
                />
                <input
                  type="text"
                  name="amount5"
                  placeholder="Amount 5"
                  value={ingredients.amount5}
                  onChange={(e) => handleIngredientsChange}
                />
                <input
                  type="text"
                  name="amount6"
                  placeholder="Amount 6"
                  value={ingredients.amount6}
                  onChange={(e) => handleIngredientsChange}
                />
                <input
                  type="text"
                  name="amount7"
                  placeholder="Amount 7"
                  value={ingredients.amount7}
                  onChange={(e) => handleIngredientsChange}
                />
                <input
                  type="text"
                  name="amount8"
                  placeholder="Amount 8"
                  value={ingredients.amount8}
                  onChange={(e) => handleIngredientsChange}
                />
              </div>
            </div>

            <div className="soapDetails">
              <div className="col-3">
                <label>Weights</label>
                <input
                  type="text"
                  name="percentSuperFat"
                  placeholder="Percent Super Fat"
                  value={percentSuperFat}
                  onChange={(e) => setPercentSuperFat(e.target.value)}
                />
                <input
                  type="text"
                  name="totalOilsWeight"
                  placeholder="Total oil weight"
                  value={totalOilsWeight}
                  onChange={(e) => setTotalOilsByWeight(e.target.value)}
                />

                <input
                  type="text"
                  name="totalRecipeWeight"
                  placeholder="Total recipe weight"
                  value={totalRecipeWeight}
                  onChange={(e) => setTotalRecipeWeight(e.target.value)}
                />
                <label>Lye Calculation</label>
                <input
                  type="text"
                  name="minimumWaterNeeded"
                  placeholder="Minimum water needed"
                  value={lyeCalculation.minimumWaterNeeded}
                  onChange={handleLyeCalculation}
                />
                <input
                  type="text"
                  name="sodiumHydroxide"
                  value={lyeCalculation.sodiumHydroxide}
                  placeholder="Sodium Hydroxide"
                  onChange={handleLyeCalculation}
                />
              </div>
              <div className="col-3">
                <label>Purchase Information</label>
                <input
                  type="text"
                  name="totalBarsAvail"
                  placeholder="Total bars available to purchase"
                  value={totalBarsAvail}
                  onChange={(e) => setTotalBarsAvailable(e.target.value)}
                />

                <input
                  type="text"
                  name="costPerBar"
                  placeholder="Cost per bar"
                  value={costPerBar}
                  onChange={(e) => setCostPerBar(e.target.value)}
                />
                <input
                  type="text"
                  name="costPerPound"
                  placeholder="Cost per pound"
                  value={costPerPound}
                  onChange={(e) => setCostPerPound(e.target.value)}
                />

                <input
                  type="text"
                  name="addCostToGiftWrapPerBar"
                  placeholder="Add Cost to Gift Wrap per Bar"
                  value={addCostToGiftWrapPerBar}
                  onChange={(e) => setAddCostToGiftWrapBar(e.target.value)}
                />
              </div>
            </div>
            <label>Notes</label>
            <textarea
              rows="4"
              cols="50"
              placeholder="Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            <input type="submit" />
          </div>
        </form>
      )}
    </div>
  );
}

export default CreateSoap;
