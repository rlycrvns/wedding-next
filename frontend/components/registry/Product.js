/* eslint-disable react/prop-types */
import Link from 'next/link';
import ItemStyles from '../styles/ItemStyles';
import formatMoney from '../../lib/formatMoney';

export default function Product({ product }) {
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <div>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </div>
      <div>{formatMoney(product.price)}</div>
      <p>{product.description}</p>
    </ItemStyles>
  );
}
