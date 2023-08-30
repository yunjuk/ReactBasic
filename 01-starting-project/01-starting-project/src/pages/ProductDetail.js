import {useParams, useState} from "react-router-dom";


const ProductDetailPage = () => {

    const params = useParams();

    return (
        <>
        <h1>Product Detail!</h1>
        <p>{params.productId}</p>
        </>
    )
};
export default ProductDetailPage;