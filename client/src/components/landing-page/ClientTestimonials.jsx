import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import clientimg1 from './../../assets/clients/carouselimg1.png';
import clientimg2 from './../../assets/clients/carouselimg2.png';
import clientimg3 from './../../assets/clients/carouselimg3.png';
import ClientComponent from './ClientComponent';

const testimonialsList = [
  {
    image: clientimg1,
    stars: 5,
    clientName: 'Charlie Stigler',
    review:
      "There was a bit of to and fro but the AutoPagePress team kept me updated on the whole process. Special shout out to Joel for being so helpful!. Overall, I'm very pleased with the service and would definitely recommend it to anyone who's looking for an easy way to register a business. Onwards and upwards!",
  },
  {
    image: clientimg2,
    stars: 5,
    clientName: 'Bob Wisely',
    review:
      'Team AutoPagePress helped our company incorporated into MCA. Team was very professional and cooperative. Response to all our doubts were cleared well.',
  },
  {
    image: clientimg3,
    stars: 5,
    clientName: 'Jonathan Ross',
    review:
      'AutoPagePress, Enough said. If you want prompt service and precise direction get in touch with AutoPagePress. Amazing service, on-time response, and super courteous people make the business experience beautiful.',
  },
];

const ClientTestimonials = () => {
  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 0.5,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 1.5,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {testimonialsList.map((testimonial, index) => (
          <ClientComponent
            key={index}
            image={testimonial.image}
            stars={testimonial.stars}
            clientName={testimonial.clientName}
            review={testimonial.review}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ClientTestimonials;
