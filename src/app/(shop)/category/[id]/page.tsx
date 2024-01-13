import { ProductGrid, Title } from '@/components';
import type { Category } from '@/interfaces';
import { initialData } from '@/seed/seed';
import { notFound } from 'next/navigation';


interface Props {
  params: {
    id: Category;
  }
}

const seedProducts = initialData.products;
export default function Category({ params }: Props) {

  const { id } = params;
  const products = seedProducts.filter( product => product.gender === id )

  // if ( id === 'kids' ) {
  //   notFound();
  // }

  const labels: Record<Category, string> = {
    'men': 'para hombres',
    'women': 'para mujeres',
    'kid': 'para niños',
    'unisex': 'para todos'
  }




  return (
    <>
      <Title
        title={`Articulos ${labels[id]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid
        products={ products }
      />
    </>
  );
}
