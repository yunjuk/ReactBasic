import {Link} from "react-router-dom";
const PRODUCTS = [
    {id:"p1", title:"Product1"},
    {id:"p2", title:"Product2"},
    {id:"p3", title:"Product3"}
]

const ProductsPage = () => {
 return (
 <>
 <h1> The Products Page</h1>
 <ul>
    {PRODUCTS.map((prod)=>(
        <li key={prod.id}>
            <Link to={`product/${prod.id}`}>{prod.title}</Link>
        </li>
    ))}
     </ul>
   {/* <li><Link to="/products/product-1"></Link></li>
   <li><Link to="/products/product-2"></Link></li>
   <li><Link to="/products/product-3"></Link></li> */}

 </>
 )
};

export default ProductsPage;