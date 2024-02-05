import React, { useState } from "react";
import { StarBorder, Star } from "@mui/icons-material";
import { IMovie } from "../ts/interfaces/global_interface"


interface Props {
  item: IMovie;
  onRating: (id: number, rating: number) => void;
}

export default function Rating({ item, onRating }: Props) {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseOver = (newRating: number) => {
    setHoverRating(newRating);
  };
  
  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const ratings: JSX.Element[] = [];
  for (let i = 0; i < 5; i++) {
    ratings.push(
      <div
        style={{ display: "inline-block" }}
        key={i}
        className="rating-btn"
        onMouseOver={() => handleMouseOver(i + 1)}
        onMouseLeave={handleMouseLeave}
        onClick={() => onRating(item.id, i + 1)}
      >
        {(hoverRating || item.rating) > i ? <Star /> : <StarBorder />}
      </div>
    );
  }

  return <div>{ratings}</div>;
}
