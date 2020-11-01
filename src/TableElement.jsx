import React from "react";

const TableElement = () => {

  return (
<table className="table table-bordered table-hover">
  <thead>
    <tr className='table-secondary'>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Address</th>
      <th scope="col">Website</th>
    </tr>
  </thead>
  <tbody>
    <tr className='table-secondary'>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>0747366543</td>
      <td>10 York Close, Downend, London</td>
       <td>HeathCare Ltd.</td>
    </tr>
    <tr className='table-secondary'>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>0747366543</td>
      <td>1 Brandon Close, Dayton, London</td>
       <td>HeathCare Ltd.</td>
    </tr>
    <tr className='table-secondary'>
      <th scope="row">3</th>
      <td>Jacob</td>
      <td>0747366543</td>
      <td>1 Brandon Close, Dayton, London</td>
       <td>HeathCare Ltd.</td>
    </tr>
  </tbody>
</table>
  );
};

export default TableElement;