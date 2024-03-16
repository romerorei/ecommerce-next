'use server';

import prisma from '@/lib/prisma';
//import { auth } from '@/auth.config';



export const getCategories = async() => {

  // const session = await auth();

  // if ( session?.user.role !== 'admin' ) {
  //   return {
  //     ok: false,
  //     message: 'Debe de estar autenticado'
  //   }
  // }

  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        name: 'asc'
      }
    });


    return categories;



  } catch (error) {
    console.log(error);
    return [];
  }


}
