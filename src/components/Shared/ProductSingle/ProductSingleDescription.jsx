import React from "react";

const ProductSingleDescription = ({ productData }) => {
  if (!productData) {
    return <div>Loading...</div>; // Or some other loading state
  }
  return (
    <div className="my-8 max-sm:w-[600px] max-sm2:w-[550px] max-sm3:w-[480px] max-sm4:w-[370px]">
      <h1 className="text-2xl font-bold">Description</h1>
      <p className="mt-2 pl-1 text-[16px]">{productData.description}</p>
      <p className="mt-4 pl-1 text-[16px]">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni।
      </p>
    </div>
  );
};

export default ProductSingleDescription;
