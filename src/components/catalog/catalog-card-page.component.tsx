import React from "react";
import Image from "next/image";
import { CardProps } from "@/interfaces/catalog-card.interface";

const CatalogCardPage: React.FC<CardProps> = ({
  item_name,
  item_photo,
  item_price,
  item_disc
}) => {
  return (
    <div
      className="w-full bg-gray-300 border border-premium relative rounded-tl-2xl rounded-br-2xl overflow-hidden cursor-pointer"
    >
      {item_price !== undefined &&
        item_disc !== undefined &&
        item_price > 0 &&
        item_disc > 0 && (
          <div className="bg-red-400 absolute p-2 text-xs w-1/4 text-center rounded-br-2xl font-semibold">
            Disc {((item_disc / item_price) * 100).toFixed(0)}%
          </div>
        )}
      {item_photo && item_photo.length > 0 ? (
        <Image
          src={item_photo[0]}
          width={350}
          height={350}
          alt="catalog-item"
          className="object-cover h-full w-full aspect-square"
        />
      ) : (
        <div className="h-full w-full flex items-center justify-center aspect-square">
          <div className="text-gray-500 text-center">No Image Available</div>
        </div>
      )}
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
      <span className="absolute bottom-0 z-5 text-white p-3 truncate w-full">
        {item_name}
      </span>
    </div>
  );
};

export default CatalogCardPage;