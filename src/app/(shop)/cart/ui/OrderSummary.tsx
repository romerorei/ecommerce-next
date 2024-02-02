'use client'

import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import { useEffect, useState } from "react"

const OrderSummary = () => {

  const [loaded, setloaded] = useState(true)
  const {tax, itemsInCart, total, subTotal} = useCartStore(state => state.getSummaryInformation());

  useEffect(() => {
    setloaded(true);
  },[])

  if (!loaded) return <p>Loading...</p>
  //console.log(getSummaryInformation.tax)

  return (
    <div className="grid grid-cols-2">
      <span>No. Productos</span>
      <span className="text-right">{itemsInCart == 1 ? `1 artículo` : `${itemsInCart} artículos`} </span>

      <span>Subtotal</span>
      <span className="text-right">{currencyFormat(subTotal)}</span>

      <span>Impuestos (15%)</span>
      <span className="text-right">{currencyFormat(tax)}</span>

      <span className="mt-5 text-2xl">Total:</span>
      <span className="mt-5 text-2xl text-right">{currencyFormat(total)}</span>
  </div>
  )
}

export default OrderSummary
