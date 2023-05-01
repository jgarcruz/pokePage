import React, { useState } from 'react';


/**
 * Asks the user for their favorite Pokemon Type
 */
function SelectControl() {
  const [selectedOption, setSelectedOption] = useState('Fire');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
    <div class="homecontainer">
      <label htmlFor="select-control">What is your favorite Pokemon Type?:</label>
      <select id="select-control" value={selectedOption} onChange={handleChange}>
        <option value="Fire">Fire</option>
        <option value="Grass">Grass</option>
        <option value="Water">Water</option>
      </select>
    </div>
    <div class="homecontainer">
      <p class="diff">Selected option: {selectedOption}</p>
    </div>
    </>
  );
}

export default SelectControl;
