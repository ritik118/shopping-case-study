import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryData } from "../store/categories/category.action";
import { selectCategoryData } from "../store/categories/category.selector";
import { fetchCategoryData } from "../utils/server/server.util";
import './ProductCategory.scss';

const ProductCategory = () => {

    const dispatch = useDispatch();

    useEffect(() => {
  
      const getCategoryData = async () => {
          if(categoryItems.length == 0){
              const categoryData = await fetchCategoryData();
               dispatch(setCategoryData(categoryData));
          }
      }
  
      getCategoryData();
    }, []);

    const categoryItems = useSelector(selectCategoryData);

  return (
      <>
      <section className="d-md-none productCategoryMobile">
        <select name="categ" id="categ" className="dropdown">
          <option id="1" value="All" defaultChecked>
            All Products
          </option>
          {categoryItems.map((categoryItem) => (
            <option key={categoryItem.id} value={categoryItem.id}>
              {categoryItem.name}
            </option>
          ))}
        </select>
      </section>
      <section className="d-none d-sm-none d-md-block productCategory">
        {categoryItems.map((categoryItem) => (
          <div key={categoryItem.id}>
            <p>{categoryItem.name}</p>
            <hr />
          </div>
        ))}
      </section>
      </>
  );
};

export default ProductCategory;
