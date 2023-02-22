import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { AiOutlineHome, AiOutlineMail, AiOutlineInfoCircle } from 'react-icons/ai'
import {FiPhoneCall} from 'react-icons/fi'


const Contact = () => {
  return (
    <>
      <Meta title={'Contact Us'}/>
    <BreadCrumb title='Contact Us'/>
    <div className='contact-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.936228741485!2d73.83827264958838!3d18.44120437635019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29500651c62b3%3A0xfebd84de97d6e070!2sDatta%20mandir!5e0!3m2!1sen!2sin!4v1676953055299!5m2!1sen!2sin" 
                width="600" 
                height="450" 
                className="border:0 w-100" 
                allowFullScreen="" loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='col-12 mt-50'>
                  <div className='contact-inner-wrapper d-flex justify-content-between'>
                    <div>
                      <h3 className='contact-title mb-4'>Contact</h3>
                      <form action='' className='d-flex flex-column gap-15'>
                         <div>
                          <input type="text" className='form-control' placeholder='name'/>
                         </div>
                         <div>
                          <input type="email" className='form-control' placeholder='Email'/>
                         </div>
                         <div>
                          <input type="tel" className='form-control' placeholder='Mobile Number'/>
                         </div>
                         <div>
                          <textarea name='' id='' className='w-100 form-control' cols="30" rows="4" placeholder='Comments'></textarea>
                         </div>
                         <div>
                          <button className='button border-0'>Submit</button>
                         </div>
                      </form>
                    </div>
                    <div>
                      <h3 className='contact-title mb-4'>Get in touch with us</h3>
                      <div>
                        <ul className='ps-0 '>
                          <li className='mb-3 d-flex gap-15 align-items-center'>
                            <AiOutlineHome className='fs-5'/>
                           <address className='mb-0'>Hno:277, Near Village chopal, Mandaura, Sonipat, Haryana</address>
                          </li>
                          <li className='mb-3 d-flex gap-15 align-items-center'>
                            <FiPhoneCall className='fs-5'/>
                             <a href='tel:+91 9370075983'>+91 9370075983</a>
                            </li>
                          <li className='mb-3 d-flex gap-15 align-items-center'>
                            <AiOutlineMail className='fs-5'/>
                            <a href='mailto:vgadhave411@gmail.com'>vgadhave411@gmail.com</a></li>
                          <li className='mb-3 d-flex gap-15 align-items-center'>
                            <AiOutlineInfoCircle className='fs-5'/>
                            <p className='mb-0'>Monday - Friday 10AM -8PM</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact;