import { Fragment } from "react";

let cars = ["Pagani Huayara", "Posche 911", "Lamborghini Veneno", "Mclaren P1"];

function ListGroup() {
  return (
    <>
      <h1>My Favourite Cars</h1>
      <ul className="list-group">
        {cars.map((cars) => (
          <li className="list-group-item" key={cars}>
            {cars}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
