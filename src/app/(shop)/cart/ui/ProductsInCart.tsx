'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import { QuantitySelector } from "@/components"
import { useCartStore } from "@/store"
import Link from "next/link"


const ProductsInCart = () => {


  const removeProduct = useCartStore(state => state.removeProduct);
  const updateProductQuantity = useCartStore(state => state.updateProductQuantity);
  const [loaded, setLoaded] = useState(false)
  const ProductsInCart = useCartStore(state => state.cart);

  useEffect(() => {
    setLoaded(true);
  },[])


  if (!loaded) {
    return <p>Loading...</p>
  }

  return (
    <>
      {
        ProductsInCart.map((product) => (

          <div key={ `${product.slug}-${product.size}` } className="flex mb-5">
            <Image
              src={ `/products/${ product.image }` }
              width={ 100 }
              height={ 100 }
              style={{
                width: '100px',
                height: '100px'
              }}
              alt={ product.title }
              className="mr-5 rounded"
            />

            <div>
              <Link
                className="hover:underline cursos-pointer"
                href={`/product/${product.slug}`}>
                <p>{ product.size } - { product.title }</p>
              </Link>
              <p>${ product.price }</p>
              <QuantitySelector
                quantity={ product.quantity }
                onQuantityChanged={quantity => updateProductQuantity(product, quantity)}
              />

              <button onClick={() => removeProduct(product)} className="underline mt-3">
                Remover
              </button>
            </div>

          </div>
        ) )
      }
    </>
  )
}

export default ProductsInCart
