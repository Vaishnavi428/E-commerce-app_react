import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const Wishlist = () => {
  return (
    <>
    <Meta title={'Wishlist'}/>
    <BreadCrumb title='Wishlist'/>
    <div className='wishlist-wrapper home-wrapper-2 py-5'>
        <div className='row'>
            <div className='col-3'>
              <div className='wishlist-card position-relative'>
                     <img src='images/cross.svg' alt='cross'
                     className='position-absolute img-fluid cross'/>
                 <div className='wishlist-card-image'>
                    <img src='images/watch.jpg' className='img-fluid w-100' alt='watch'/>
                 </div>
                      <div className='px-3 py-3'>
                      <h5 className='title'>Honor T1 7.0 1 GB RAM 7 Inch with Wi-Fi+3G Tablet</h5>
                      <h6 className='price mb-3 mt-3'>$100</h6>
                      </div>
             </div>  
            </div>
        </div>
    </div>
    </>
  )
}

export default Wishlist