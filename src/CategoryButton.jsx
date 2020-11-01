import React from "react";
import TableElement from './TableElement';


const CategoryButtons = () => {

  return (
    <div className='category-button' >
        <div className='buttons-wrapper' >
            <button type="button" className="btn btn-info btn-lg col-2">Pharmacies</button>
            <button type="button" className="btn btn-info btn-lg col-2">schools&colleges</button>
            <button type="button" className="btn btn-info btn-lg col-2">hospitals</button>
            <button type="button" className="btn btn-info btn-lg col-2">doctors</button>
        </div>
        <TableElement/>
    </div>
  );
};

export default CategoryButtons;