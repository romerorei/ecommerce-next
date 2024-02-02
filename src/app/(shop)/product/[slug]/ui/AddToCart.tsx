'use client';

import { QuantitySelector, SizeSelector } from '@/components'
import type { CartProduct, Product, Sizes } from '@/interfaces'
import { useCartStore } from '@/store';
import React, { useState } from 'react'


interface Props {
  product: Product
}

const AddToCart = ({product}:Props) => {

  const addProductToCart = useCartStore( state => state.addProductToCart);

  const [size, setSize] = useState<Sizes|undefined>();
  const [ quantity, setQuantity ] = useState<number>(1);
  const [posted, setPosted] = useState(false)

  const addToCart = () => {
    setPosted(true)
    if (!size) return
    console.log({'quantity': quantity, 'size': size, product})

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      size: size,
      image: product.images[0]
    }

    addProductToCart(cartProduct);
    setPosted(false);
    setQuantity(1);
    setSize(undefined);
  }

  return (
    <>

        { posted && !size && (
            <span className='mt-2 text-red-500'>
              Seleccione una talla
            </span>
        )}


        {/* Selector de Tallas */ }
        <SizeSelector
          selectedSize={ product.sizes[ 1 ] } // 1 temporal
          availableSizes={ product.sizes }
          onSizeChanged={size => setSize(size)}
        />

        {/* Selector de Cantidad */ }
        <QuantitySelector
          quantity={ quantity }
          onQuantityChanged = {quantity => setQuantity(quantity)}
        />

        {/* Button */ }
        <button
          className="btn-primary my-5"
          onClick={addToCart}
          >
          Agregar al carrito
        </button>

    </>
  )
}

export default AddToCart
