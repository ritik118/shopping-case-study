import ProductCategory from '../components/ProductCategory';
import Products from '../components/Products';
import './ProductListing.scss';

const ProductListing = () => {

    return (
      <main className="plpContainer">
        <ProductCategory />
        <Products />
      </main>
    )

}

export default ProductListing;