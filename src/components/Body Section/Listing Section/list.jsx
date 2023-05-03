import { AiFillHeart } from "react-icons/ai";

export default function List({ name, img }) {
  return (
    <div className="singleItem">
      <AiFillHeart className="icon" />
      <img src={img} alt="imageName" />
      <h3>{name}</h3>
    </div>
  );
}
