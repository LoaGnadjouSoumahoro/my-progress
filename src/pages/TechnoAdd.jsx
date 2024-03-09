import React from "react";

export const TechnoAdd = () => {
  return (
    <div className="techno-add">
      <h1>Add a Techno</h1>
      <div>
        <form action="">
          <label htmlFor="techno-name">Name</label>
          <br />
          <input type="text" name="techno-name" id="techno-name" />
          <br />
          <select name="techno-categorie" id="techno-categorie"></select>
          <br />
          <input type="submit" value="Add Techno" />
        </form>
      </div>
    </div>
  );
};
