import React, { useEffect, useState } from "react";
import PageContainer from "@/containers/page.container";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { FaFilter } from "react-icons/fa6";
import Pagination from "@/components/atomic/pagination";
import CatalogCardPage from "@/components/catalog/catalog-card-page.component";
import { Checkbox, Typography } from "@material-tailwind/react";
import SearchCatalog from "@/components/atomic/search-catalog";
import { FaArrowDownAZ, FaArrowUpAZ } from "react-icons/fa6";
import { toast } from "react-toastify";
import { listProductFilter } from "@/api/catalog.api";
import { categoryList } from "@/api/category.api";
import {
  CatalogParamsI,
  FilterCatalogResI,
} from "@/interfaces/catalog-card.interface";
import { CategoryListI } from "@/interfaces/category.interface";
import Loading from "@/components/atomic/loading";

const CatalogPage: React.FC = () => {
  const [openFilterCategory, setOpenFilterCategory] = useState<boolean>(true);
  const [openFilterList, setOpenFilterList] = useState<boolean>(false);
  const [filterOrderList, setFilterOrderList] = useState<boolean>(false);
  const [params, setParams] = useState<CatalogParamsI>({
    limit: 12,
    page: 1,
    search: "",
    searchby: "product",
    sortby: "created_at",
    sort: filterOrderList ? "ASC" : "DESC",
  });
  const [products, setProducts] = useState<FilterCatalogResI | undefined>(
    undefined
  );
  const [searchInput, setSearchInput] = useState<string>("");
  const [category, setCategory] = useState<CategoryListI[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const fetchDataProduct = async () => {
    try {
      const response = await listProductFilter(params);
      setProducts(response?.data);
      const category = await categoryList();
      setCategory(category?.data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataProduct();
  }, [params]);

  const handlePageChange = (newPage: number) => {
    setParams((prev) => ({ ...prev, page: newPage }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setParams((prev) => ({ ...prev, search: searchInput, page: 1 })); // reset to first page
    }
  };
  const handleSortToggle = () => {
    setFilterOrderList((prev) => !prev);
    setParams((prev) => ({
      ...prev,
      sort: openFilterList ? "ASC" : "DESC",
    }));
  };

  const handleCategoryChange = (categoryName: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedCategory(categoryName);
      setParams((prev) => ({
        ...prev,
        searchby: "category",
        search: categoryName,
      }));
    } else {
      setSelectedCategory(null);
      setParams((prev) => ({
        ...prev,
        searchby: "product",
        search: "",
      }));
    }
  };

  return (
    <PageContainer>
      <div className="grid md:grid-cols-3 lg:grid-cols-7 gap-5 container mx-auto relative">
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

          {loading ? (
            <Loading
              className="bg-premium rounded-xl py-10"
              color="border-t-premium"
            />
          ) : (
            <div
              className={`w-full flex flex-row md:flex-col flex-wrap gap-2 p-3 rounded-xl bg-premium transition-transform duration-1000 ease-in-out ${
                openFilterCategory
                  ? "h-auto opacity-100 translate-y-0"
                  : "h-0 opacity-0 translate-y-[-30px]"
              } overflow-hidden`}
            >
              {category?.map((item, i) => {
                return (
                  <div
                    className="pe-3 bg-third md:bg-transparent rounded-2xl w-fit"
                    key={i}
                  >
                    <Checkbox
                      label={
                        <Typography className="text-white md:text-main text-xs p-0 m-0 md:font-semibold">
                          {item.name}
                        </Typography>
                      }
                      checked={selectedCategory === item.name}
                      onChange={(e) =>
                        handleCategoryChange(item.name, e.target.checked)
                      }
                      className="border-white md:border-main h-4 w-4 p-0 m-0"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="md:col-span-2 lg:col-span-5 flex flex-col w-full gap-5">
          <div className=" w-full flex justify-between items-center text-premium relative">
            <div className="text-lg font-semibold font-philosopher">
              List Products
            </div>
            <div
              onClick={() => {
                setSelectedCategory(null);
                setParams((prev) => ({
                  ...prev,
                  searchby: "product",
                }));
              }}
              className="w-1/2"
            >
              <SearchCatalog
                onChange={handleSearchChange}
                onKeyDown={handleSearchKeyDown}
              />
            </div>

            <div className="flex flex-row items-center">
              {openFilterList ? (
                <FaArrowUpAZ size={20} />
              ) : (
                <FaArrowDownAZ size={20} />
              )}
              <FaFilter
                size={24}
                onClick={() => {
                  setOpenFilterList(!openFilterList);
                  handleSortToggle();
                }}
                className="cursor-pointer"
              />
            </div>
          </div>
          {loading ? (
            <Loading className="mt-32 mb-28" color="border-t-premium" />
          ) : products && products?.list?.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {products?.list?.map((item, i) => {
                return (
                  <CatalogCardPage
                    product={item.product}
                    key={i}
                    image={item.image}
                    disc={item.disc}
                    price={item.price}
                    stock={item.stock}
                    id={item.id}
                  />
                );
              })}
            </div>
          ) : (
            <div className="text-2xl text-premium flex justify-center items-center my-32 h-full font-semibold">
              <div>Available soon...</div>
            </div>
          )}
        </div>
      </div>
      <div className="my-10 flex justify-center items-center">
        <Pagination
          totalPage={products?.pagination?.totalPage || 1}
          pageNow={params.page}
          onPageChange={handlePageChange}
        />
      </div>
    </PageContainer>
  );
};

export default CatalogPage;
