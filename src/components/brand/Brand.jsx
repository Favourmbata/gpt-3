import { google,slack,altlassian,dropbox,shopify } from './import'
import React from 'react'

import './brand.css'
const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
    <div className=''>
     <img src={google} alt='google'/>
    </div>
    <div className=''>
     <img src={slack} alt='slack'/>
    </div>
    <div className=''>
     <img src={altlassian} alt='altlasian'/>
    </div>
    <div className=''>
     <img src={dropbox} alt='dropbox'/>
    </div>
    <div className=''>
     <img src={shopify} alt='shopify'/>
    </div>
    </div>
  )
}

export default Brand