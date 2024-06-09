import React from 'react'
import Item from '../../Item/item'
const HomeSection = ({ headerName,data_product}) => {
    return (
        <section className='full-page-section bg-white'>
            <div className="centre-page-section flex-col gap-4 py-8 ">
                <div className="popular-in-women-header  flex flex-col items-center  justify-center">
                    <h1 className='text-5xl text-[#0a0624]' >{headerName}</h1>
                    <hr className=' bg-[#090520] w-80'  />
                </div>

                <div className="women-prodcuts h-11/12 w-full flex gap-4  items-center justify-center flex-wrap ">
                    {data_product.map ((e,idx)=> <Item id={e.id} name={e.name} image={e.image} newPrice={e.new_price} oldPrice={e.old_price} off={e.off}></Item>)}
                </div>
                

            </div>
        </section>
    )
}

export default HomeSection