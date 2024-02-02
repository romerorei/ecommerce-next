import type { Sizes } from '@/interfaces';
import clsx from 'clsx';


interface Props {
  selectedSize?: Sizes;
  availableSizes: Sizes[];  // ['SX', 'M', 'XL', 'XXL']


  onSizeChanged: ( sizes: Sizes ) => void;
}


export const SizeSelector = ({ selectedSize, availableSizes, onSizeChanged }: Props) => {

  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>

      <div className="flex">

        {
          availableSizes.map( size => (
            <button
              key={ size }
              onClick={() => onSizeChanged(size)}
              className={
                clsx(
                  "mx-2 hover:underline text-lg",
                  {
                    'underline': size === selectedSize
                  }
                )
              }
            >
              { size}
            </button>
          ))

        }


      </div>


    </div>
  )
}
