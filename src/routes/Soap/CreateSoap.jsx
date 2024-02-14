import React, { useState } from 'react'

function CreateSoap() {
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [image, setImage] = useState("");

  return (
    <div>
      <h1>Create a new Soap Recipe</h1>

      <form>
        <div className="col-1">
          <label>Recipe Title: </label>
          <input
            type="text"
            name="recipe_title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="col-2">
          <label>Slug</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
        </div>

        <div className="col-2">
          <label>Image</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

      </form>
    </div>
  );
}

export default CreateSoap
