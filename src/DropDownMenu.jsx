import React from "react";


const DropDownMenu = () => {

  return (
    <div className='menu-wrapper'>
        <div className="input-group col-3">
            <div className="input-group-prepend">
            <label className="input-group-text select-menu"     for="inputGroupSelect01">Select the city</label>
        </div>
            <select className="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">London</option>
                <option value="2">Bristol</option>
                <option value="3">Birmingham</option>
                <option value="4">Cambridge</option>
                <option value="5">Swansea</option>
            </select>
        </div>
    </div>

  );
};

export default DropDownMenu;