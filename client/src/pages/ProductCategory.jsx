import React from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { categories } from "../assets/assets";
import ProductCard from "../components/ProductCard";

function ProductCategory() {
  const { products } = useAppContext(); 
  const { category } = useParams();

  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category
  );

  const filteredProducts = products.filter((product) => product.category.toLowerCase() === category);

  return (
    <div className="mt-16">
      {searchCategory && (
        <div className="flex flex-col items-start w-fit">
          <p className="text-2xl font-medium uppercase ">
            {searchCategory.text.toLowerCase()}
          </p>
          <div className="h-0.5 bg-primary rounded-full w-full mt-1"></div>
        </div>
      )}
      {filteredProducts.length >0 ?(
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6">
                {filteredProducts.map((product) => (
                    <ProductCard key={product._id} product={product}/>
                ))}
            </div>
      ):(
            <div className="flex items-center justify-center h-[60vh]">
                <p className="text-2xl font-medium text-primary">No product found in this Category.</p>

            </div>
      )}

    </div>
  );
}

export default ProductCategory;
