import SinglePage from '../../components/singlePage/SinglePage';
import { singleProduct } from '../../data';
import './product.scss';

const Product = () => {
  // fetch the Data and send it to the Single Componenet
  return (
    <div className="product">
      <SinglePage {...singleProduct} />
    </div>
  );
};

export default Product;
