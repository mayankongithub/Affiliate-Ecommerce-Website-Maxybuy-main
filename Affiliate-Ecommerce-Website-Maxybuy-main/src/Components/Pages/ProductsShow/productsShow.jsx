
import { useContext, useEffect } from 'react'
import { StoreContext } from '../../Store/storeContext'
import Item from '../../Item/item'



const ProductsShow = ({banner, category}) => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ ]);


  const { all_product} = useContext(StoreContext)
   
  let countMenProduct=0;
  all_product.map((e) => {
    if(e.category==='men'){
      countMenProduct++;
    }
 
  })


  return (
    <section className='productsShow-section full-page-section bg-white'>
      <div className="productsShow centre-page-section flex-col">

        <div className="banner mt-20 w-full border-solid  border-2 border-white">
          <img className='w-full' src={banner} alt="" />
          <div className="sort-by flex items-center justify-between h-[80px] w-full border-solid  border-2 border-white">
            <p className='ml-[20px] text-[#454749]' ><span className='text-black' >Showing{`${1}-${countMenProduct} `}</span>Out of 54 Products </p>
            
            <select className='mr-[20px] rounded-lg h-[40px] w-[80px] text-[15px] '   name="Men" id="mens">
              <option defaultValue="sort-by"  hidden>Sort by</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="5000">5000</option>
            </select>
          </div>
        </div>

        <div className="prducts flex items-center justify-center flex-wrap gap-6 w-full mb-4  ">
           
          {all_product.map((e,index)=> {
            if(e.category===category){
            return  <Item key={e.id} id={e.id} name={e.name} image={e.image} newPrice={e.new_price} oldPrice={e.old_price}></Item>
            }
          })}

        </div>
      </div>
      

    </section>
  )
}

export default ProductsShow