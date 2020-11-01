import React from "react";
import TableElement from './TableElement';


const CategoryButtons = () => {

  return (
    <div className='category-button' >
        <div className='buttons-wrapper' >
            <button type="button" className="btn btn-info btn-lg">Pharmacies</button>
            <button type="button" className="btn btn-info btn-lg">schools&colleges</button>
            <button type="button" className="btn btn-info btn-lg">hospitals</button>
            <button type="button" className="btn btn-info btn-lg">doctors</button>
        </div>
        <TableElement/>
    </div>
  );
};

export default CategoryButtons;