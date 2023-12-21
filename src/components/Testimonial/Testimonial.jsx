import React from "react";
import Slider from "react-slick";
import Pic1 from "../../assets/pic1.png";
import Pic2 from "../../assets/pic2.png";
import Pic3 from "../../assets/pic3.png";
const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Experiencing their lightning-fast delivery is a game-changer. Feel the speed and reliability firsthand – it's an unmatched service that adds a whole new level of convenience to your shopping experience!.",
    img: Pic1,
  },
  {
    id: 1,
    name: "Emily",
    text: "Experiencing their friendly customer care was a game-changer for me. The warmth and helpfulness I encountered firsthand made my interaction with them a delightful and memorable experience.",
    img: Pic2,
  },
  {
    id: 1,
    name: "Smith",
    text: "Choosing them as my first source for quality products was a game-changer. Their commitment to excellence has made them my go-to plug for top-tier items.",
    img: Pic3,
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
            Explore the insightful testimonials from our valued customers and gain valuable insights into their 
            experiences with our products. Delve into the positive feedback and comments that highlight the satisfaction 
            and trust our customers place in the quality and performance of our offerings. These testimonials serve as a 
            testament to our commitment to delivering exceptional products and ensuring customer delight
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6">
                    <div
                      key={data.id}
                      className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                    >
                      <img
                        className="rounded-full block mx-auto"
                        src={data.img}
                        alt=""
                      />
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="text-xl font-bold">{data.name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
