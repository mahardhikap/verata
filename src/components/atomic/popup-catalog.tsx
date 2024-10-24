import React from "react";
import Image from "next/image";
import { CardProps } from "@/interfaces/catalog-card.interface";

const PopupCatalog: React.FC<CardProps> = ({
  setOpenPopup,
  openPopup,
  item_name,
  item_desc,
  item_disc,
  item_photo,
  item_price,
}) => {
  const handleClick = () => {
    if (setOpenPopup) {
      setOpenPopup(!openPopup);
    }
  };

  const handleOrderClick = () => {
    const message = `Halo, saya mau pesan ${item_name}.`;
    const whatsappUrl = `https://wa.me/+6287878780251?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!openPopup) {
    return null;
  }

  return (
    <>
      <div
        onClick={() => {
          handleClick();
        }}
      >
        <div className="fixed inset-0 bg-black opacity-50 z-10" />
        <div className="fixed inset-0 flex items-end justify-center md:items-center z-20">
          <div className="bg-main rounded-t-2xl md:rounded-2xl h-4/5 lg:h-1/2 w-full md:w-3/4 lg:w-1/2 p-3">
            <div className="overflow-y-auto h-full">
              <div className="md:flex list-none flex-col font-poppins text-sm font-normal leading-5 text-premium">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                  <div className="col-span-1 lg:col-span-2">
                    {item_photo && item_photo.length > 0 ? (
                      <Image
                        src={item_photo[0]}
                        width={500}
                        height={500}
                        alt="catalog-item"
                        className="object-cover aspect-square h-full w-full"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center aspect-square bg-[#e0e0e0]">
                        <div className="text-gray-500 text-center">
                          No Image Available
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col-span-1 lg:col-span-2 flex flex-col lg:px-4 relative">
                    <div className={`${item_disc && item_disc > 0 ? 'flex items-center gap-2' : 'hidden'} my-2 text-base font-semibold`}>
                      <div className="line-through">{item_price}</div>
                      {item_price !== undefined &&
                        item_disc !== undefined &&
                        item_price > 0 &&
                        item_disc > 0 && (
                          <div className="bg-red-400 rounded text-white px-2 py-1 text-xs">
                            Disc {((item_disc / item_price) * 100).toFixed(0)}%
                          </div>
                        )}
                    </div>
                    <div 
                      className="absolute px-3 py-2 rounded-xl bg-green-500 text-white font-semibold right-2 top-4 cursor-pointer"
                      onClick={handleOrderClick}
                    >
                      ORDER
                    </div>
                    <div className="text-2xl font-bold">
                      {item_disc && item_price && item_disc > 0
                        ? item_price - item_disc
                        : item_price}
                    </div>
                    <div className="font-semibold text-base">{item_name}</div>
                    <div>{item_desc}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupCatalog;