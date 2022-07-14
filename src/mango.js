import React from "react";

export default function Mango()
{
    const products = [
        {
            productName : "iphone",
            quantity : 0,
        },
        {
            productName : "dell",
            quantity : 0,
        },
        {
            productName : "lenovo",
            quantity : 0,
        },
        {
            productName : "apple",
            quantity : 0,
        },
        {
            productName : "hp",
            quantity : 0,
        },
    ]
    return(
        <div className="text-center">
            {products.map((product) => {
                return(
                    <div>
                        <div>Product Name : {product.productName}</div>
                        <div>Product Qunatity : {product.quantity}</div>
                    </div>
                );
            })}
        </div>    
    )
}