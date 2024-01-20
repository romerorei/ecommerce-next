export const revalidate = 60; // 60 segundos

import { getPaginatedProductsWithImages } from '@/actions';
import { Pagination, ProductGrid, Title } from '@/components';

import { Gender } from '@prisma/client';



interface Props {
  params: {
    gender: string;
  },
  searchParams: {
    page?: string;
  }
}


export default async function GenderPage({ params, searchParams }: Props) {

  const { gender } = params;
  const page = searchParams.page ? parseInt( searchParams.page ) : 1;

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({
    gender: gender as Gender,
    page
  });


  const labels: Record<string, string> = {
    'men': 'para hombres',
    'women': 'para mujeres',
    'kid': 'para niños',
    'unisex': 'para todos'
  }


  return (
    <>
      <Title
        title={`Articulos ${labels[gender]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid
        products={ products }
      />

      <Pagination totalPages={totalPages} />
    </>
  );
}
