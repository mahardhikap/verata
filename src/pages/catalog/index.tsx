import React, { useState } from "react";
import PageContainer from "@/containers/page.container";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { FaFilter } from "react-icons/fa6";
import Pagination from "@/components/atomic/pagination";
import { CatalogDummy, HeaderMenu } from "@/data/menu.data";
import CatalogCardPage from "@/components/catalog/catalog-card-page.component";
import { Checkbox, Typography } from "@material-tailwind/react";
import FilterOrder from "@/components/atomic/filter-order";
import SearchCatalog from "@/components/atomic/search-catalog";

const CatalogPage: React.FC = () => {
  const [openFilterCategory, setOpenFilterCategory] = useState<boolean>(true);
  const [openFilterList, setOpenFilterList] = useState<boolean>(false);
  
  return (
    <PageContainer>
      <div className="grid md:grid-cols-3 lg:grid-cols-7 gap-5 container mx-auto">
        <div className="flex flex-col col-span-1 lg:col-span-2 w-full gap-5">
          <div
            className="w-full flex justify-between items-center text-premium cursor-pointer"
            onClick={() => {
              setOpenFilterCategory(!openFilterCategory);
            }}
          >
            <div className="text-lg font-semibold font-philosopher">Filter</div>
            {openFilterCategory ? (
              <IoIosArrowDropup size={30} />
            ) : (
              <IoIosArrowDropdown size={30} />
            )}
          </div>

          <div
            className={`w-full flex flex-row md:flex-col flex-wrap gap-2 p-3 rounded-xl bg-premium transition-transform duration-1000 ease-in-out ${
              openFilterCategory
                ? "h-auto opacity-100 translate-y-0"
                : "h-0 opacity-0 translate-y-[-30px]"
            } overflow-hidden`}
          >
            {HeaderMenu?.map((item, i) => {
              return (
                <div
                  className="pe-3 bg-second md:bg-transparent rounded-2xl w-fit"
                  key={i}
                >
                  <Checkbox
                    label={
                      <Typography className="text-white md:text-second text-xs p-0 m-0 md:font-semibold">
                        {item.label}
                      </Typography>
                    }
                    className="border-white md:border-second h-4 w-4 p-0 m-0"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-5 flex flex-col w-full gap-5">
          <div className=" w-full flex justify-between items-center text-premium relative">
            <div className="text-lg font-semibold font-philosopher">List Products</div>
            <SearchCatalog/>
            <FaFilter size={24} onClick={()=>{setOpenFilterList(!openFilterList)}} className="cursor-pointer"/>
            {
              openFilterList && (
                <FilterOrder/>
              )
            }
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {CatalogDummy?.map((item, i) => {
              return (
                <CatalogCardPage
                  item_name={item.item_name}
                  key={i}
                  item_photo={item.item_photo}
                  item_disc={item.item_disc}
                  item_price={item.item_price}
                  id={i}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="my-10 flex justify-center items-center">
        <Pagination />
      </div>
    </PageContainer>
  );
};

export default CatalogPage;
