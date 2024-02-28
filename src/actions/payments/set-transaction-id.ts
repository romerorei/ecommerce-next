'use server';

import prisma from '@/lib/prisma';


export const setTransactionId = async( orderId: string, transactionId: string ) => {

  try {
    // console.log({orderId})
    // console.log({transactionId})
    const order = await prisma.order.update({
      where: { id: orderId },
      data: { transactionId: transactionId}
    });
    //console.log('orderrrr',order)
    console.log({order})

    if ( !order ) {
      return {
        ok:false,
        message: `No se encontró una orden con el ${ orderId }`,
      }
    }

    return { ok: true }


  } catch (error) {

    console.log(error);

    return {
      ok: false,
      message: 'No se pudo actualizar el id de la transacción'
    }

  }


}
