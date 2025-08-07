
'use client'

import React, { useState } from 'react'
import './style.css'
export default function Prodoct() {

  const [prodoct,setprodoct]=useState( 
        [
           {name:'baghche.jpg',title:'پایه گلدان چوبی چند طبقه' ,id:1,price:'670,000'},
            {name:'ghory.jpg',title:'قوری طرح مینیمال ',id:2,price:'220,000'},
            {name:'goldan.jpg',title:'گلدان چینی',id:3,price:'280,000'},
            {name:'koze.jpg',title:'آجیل خوری چینی',id:4,price:'540,000'},
            {name: 'mojasame.jpg',title:'مجسمه فلزی مرغابی',id:5,price:'380,000'},
            {name:'ayne.webp',title:'آینه دیواری طرح دار',id:6,price:'330,000'},
            {name:'ghablame2.jpg',title:'سرویس سه تیکه قابلمه',id:7,price:'590,000'},
            {name:'ghablame3.jpg',title:'سرویس شش تیکه قابلمه استیل',id:8,price:'1,450,000'},
            {name:'tablo.jpg',title:'تابلو فرش ',id:9,price:'2,300,000'},
            {name:'fenjan2.webp',title:'چای خوری سلطنتی طرح لیلی و مجنون',id:10,price:'2,800,000'}
          
        ]

)
  return (
    <div className='prodoct'>
      {prodoct.map((item)=>(
        <div key={item.id} className='prodoct-item'>
        <img src={`./prodoct/${item.name}`} alt="img nut fund" className='imgprodoct'/>
         <span className='titleprodoct'>{item.title}</span>
         <span className='priceprodoct'>{item.price  + ' تومان'}</span>
         <button className='buttonprodoct'>خرید</button>
        </div>
      )

      )

      }
    
    </div>
  )
}
