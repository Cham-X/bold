import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { FaArrowRight } from "react-icons/fa6";

const data = [
    {
        title: "Cool feature title.",
        image: "/assets/Images/Rectangle 1270 (1).png",
        content:"Learning curve network effects return on investment."
    },
    {
        title: "Cool feature title,",
        image: "/assets/Images/Rectangle 1270 (1).png",
        content:"Learning curve network effects return on investment."
    },
    {
        title: "Cool feature title",
        image: "/assets/Images/Rectangle 1270 (1).png",
        content:"Learning curve network effects return on investment."
    }
]

const OurService = () => {
  return (
      <section>
          <h3>Our Services</h3>
          <h1>Handshake infographic mass market crowdfunding iteration.</h1>
          <div className='flex items-center justify-between gap-4 '>
              {data.map((item) => {
                  return (
                      <Card
                          key={item.title}
                          {...item}
                      />
                 )
             })} 
          </div>
   </section>
  )
}

const Card = ({image,title,content}:{image:string,title:string,content:string}) => { 
    return (
        <div>
            <Image
                src={image}
                alt={title}
                width={300 }
                height={354 }
            />
            <h3>{title}</h3>
            <p>{content}</p>
            <Link href={"/"}>
                Explore page
                <span>
                  <FaArrowRight />
                </span>
            </Link>
        </div>
    )
}

export default OurService
