import React from 'react'
import { MdCheckCircleOutline } from 'react-icons/md'
import { motion } from 'framer-motion'

const ServicesData = [
    {
        id: 1,
        tittle: "Vinyl Material",
        link: "#",
        icon: <MdCheckCircleOutline />,
        delay: 0.2,
    },
    {
        id: 2,
        tittle: "Professional Installation",
        link: "#",
        icon: <MdCheckCircleOutline />,
        delay: 0.2,
    },
    {
        id: 3,
        tittle: "Design Consultation",
        link: "#",
        icon: <MdCheckCircleOutline />,
        delay: 0.2,
    },
    {
        id: 4,
        tittle: "Epoxy",
        link: "#",
        icon: <MdCheckCircleOutline />,
        delay: 0.2,
    },   
]

const Slideleft = (delay) => {
    return {
        initial:{
            opacity: 0,
            x: 50
        },
        animate:{
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                delay: delay,
                ease: "easeInOut",
            }
        }
    }
}

const ServicesSection = () => {
  return (
    <section className='bg-white'>
        <div className='container pb-14 pt-16'>
            <h1 className='lg:text-4xl lg:text-left text-2xl font-bold text-center pb-10'>
                Services We Provide
            </h1>
            <div className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-8'>
                {ServicesData.map((service) => (
                 <motion.div  
                 variants={Slideleft(service.delay)}
                 initial="initial"
                 whileInView={"animate"}
                 viewport={{ once: true }}
                 className='bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-12 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl'>
                 <div className="lg:text-4xl text-2xl mb-4">{service.icon}</div>
                    <h1 className='text-lg font-semibold text-center px-3'>{service.tittle}</h1>
                 </motion.div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default ServicesSection
