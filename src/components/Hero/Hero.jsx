import React from 'react'
import Image1 from "../../assets/Hero/hombre-comprando.png";
import Image2 from "../../assets/Hero/woman-shop.png";
import Image4 from "../../assets/Hero/shopping.jpg";
import Image3 from "../../assets/Hero/sale.png";
import Slider from "react-slick";

const imagelist = [
    {
        id: 1,
        img: Image1,
        title: "upto 50% off all Men Wear",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusamus eos quasi voluptas assumenda ad similique incidunt, quas, in culpa tempore voluptate non iusto rem illum optio aperiam odit adipisci."
    },
    {
        id: 2,
        img: Image2,
        title: "30% off all Women Wear",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusamus eos quasi voluptas assumenda ad similique incidunt, quas, in culpa tempore voluptate non iusto rem illum optio aperiam odit adipisci."
    },
    {
        id: 3,
        img: Image3,
        title: "70% off on all Products Sale",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusamus eos quasi voluptas assumenda ad similique incidunt, quas, in culpa tempore voluptate non iusto rem illum optio aperiam odit adipisci."
    },
]

const Hero = () => {
    var settings ={
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
        {/* background pattern */}
        <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>

        </div>
        {/* hero section */}
        <div className='container pb-8 sm:pb-0'>
            <Slider {...settings}>
                {imagelist.map((data)=>(
                    <>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        {/* text content section */}
                        <div
                        className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'
                        >
                            <h1 
                            data-aos="zoom-out"
                            data-aos-duration="500"
                            data-aos-once="true"
                            className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}
                            </h1>
                            <p 
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="100"
                            className='text-sm'>
                                {data.description}
                            </p>
                            <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="300"
                            
                            >
                                <button
                                className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'
                                >Order Now</button>
                            </div>
                        </div>
                        {/* image section */}
                        <div className='order-1 sm:order-2'>
                            <div 
                            data-aos="zoom-in"
                            data-aos-once="true"
                            className='relative z-10'>
                                <img 
                                src={data.img} 
                                alt="" 
                                className='h-[400px] w-[400px] sm:h-[450px] sm:w-[450px] sm:acale-105 lg:scale-140 object-contain mx-auto '
                                />
                            </div>
                        </div>
                    </div>
                </>
                ))}
                
            </Slider>
        </div>
    </div>
  )
}

export default Hero