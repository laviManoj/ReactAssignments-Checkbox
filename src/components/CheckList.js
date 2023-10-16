import React, {useState} from 'react';
import "./CheckList.css";

function Checklist() {
  const [options, setOptions] = useState(['Option 1', 'Option 2', 'Option 3', 'Option 4']);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) =>{
    if(selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));

    }else{
      setSelectedOptions([...selectedOptions, option]);
    }
  };



  return(
    <div className='checklist-container'>
      <h2 >Checklist</h2>
      {}
      {options.map((option, index) => (
        <div key={index} className='checklist-label'>
          <input type="checkbox"
          value={option}
          checked={selectedOptions.includes(option)}
          onChange={() => handleCheckboxChange(option)}
          className='checklist-checkbox'
          />
          {option}
          </div>
      ))}
      <div className='selected-options'>
        <h3>Selected Options:</h3>
        <ul>
          {selectedOptions.map((option, index) =>(
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
          </div>
  );
}


export default Checklist;