import React from "react";
import Image from "next/image";
import { CardProps } from "@/interfaces/catalog-card.interface";

const CatalogCard: React.FC<CardProps> = ({
  item_name,
  item_photo,
}) => {
  return (
    <>
      <div className="aspect-square bg-gray-300 border border-premium relative rounded-tl-2xl rounded-br-2xl overflow-hidden cursor-pointer">
      {item_photo && item_photo.length > 0 ? (
        <Image
          src={item_photo[0]}
          width={350}
          height={350}
          alt="catalog-item"
          className="object-cover h-full w-full"
        />
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <span className="text-gray-500 text-center">No Image Available</span>
        </div>
      )}
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
        <span className="absolute bottom-0 z-5 text-white p-3 truncate w-full">
          {item_name}
        </span>
      </div>
    </>
  );
};

export default CatalogCard;
