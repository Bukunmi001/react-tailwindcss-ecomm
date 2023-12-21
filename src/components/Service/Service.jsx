import React from 'react'
import Img2 from "../../assets/biryani2.png";
import Img3 from "../../assets/biryani5.png";
import Img4 from "../../assets/biryani312.png";

const ServicesData = [
    {
        id: 1,
        img: Img2,
        name: "Summer Mens Loose",
        description:
          "Features: Comfortable，Casual，Very Cool，DurableOccasions: Sports、Casual",
      },
      {
        id: 2,
        img: Img3,
        name: "Men's Brighton Sneaker",
        description:
      "These sneakers are also designed to fit and make you standout in any occasion whether you are going for the work casual "      },
      {
        id: 3,
        img: Img4,
        name: "Mens Casual Vintage Short Sleeve",
        description:
          "The concept is designed to suit the very desire of having most of our everyday ",
      },
    
]
const Service = () => {
  return (
    <>
    <div className='py-10'>
        <div className='container'>
            <div className='text-center mb-20 max-w-[400px] mx-auto'>
                <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                    Our Service
                </p>
                <h1 className='text-5xl font-bold'> Service </h1>
                <p className='text-8xs text-gray-400'>
                   {" "}
                   With our vast network of stores strategically positioned across the country, we take pride in ensuring the prompt and efficient delivery of our premium products, bringing the convenience of shopping directly to your doorstep with the utmost speed and reliability 
                </p> 
                </div>

                {/* Card Section */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full ">
                    {/* <StarRatings
                      rating={4}
                      starRatedColor="yellow"
                      isSelectable={false}
                      starHoverColor="yellow"
                      // starSelectingHoverColor
                      starDimension="20px"
                      changeRating={() => {}}
                      numberOfStars={5}
                      name="rating"
                    /> */}
                  </div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

    </div>
    
    
    </>
  )
}

export default Service