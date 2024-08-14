import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  Rating
} from "@mui/material";
import Slider from "react-slick";

const sampleData = [
  {
    title: "saadmehmood09 | Pakistan",
    description: "Excellent work, just as I expected. His dedication to completing the project within the timeline is truly commendable and greatly appreciated.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "abdu_sizz | Egypt",
    description: "Syed is one of the best, hard-working, passionate, and respectful people you can work with on Fiverr. His work was exceptional, providing amazing work on a platform he was somewhat unfamiliar with which utilised the Chrome CEF. Second, the work was done blazing fast which was unexpected for the amount of work. Third, his prices beat almost everyone",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "huzaifax1 | Canada",
    description: "Exceptional delivery, work was done as discussed and met my expectations. Amazing work and an amazing guy to with. Definitely recommended",
    image: "https://via.placeholder.com/150",
  },
  // Add more card data as needed
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2, // Default to show 1 slide on smaller screens
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 3000, // Adjust autoplay speed as needed
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 slide on screens smaller than 600px
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2, // Show 2 slides on screens between 600px and 960px
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3, // Show 3 slides on screens between 960px and 1280px
        }
      }
    ]
  };

  const [value, setValue] = React.useState(5);

  return (
    <Box>
      <Container sx={{ background: 'linear-gradient(to left top, #f6f8f6, #e9f3f2)', py:  10}} maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography sx={{ fontSize: { xs: "28px", sm: "36px", md: "40px" }, fontWeight: "700" }}>
            Testimonials
          </Typography>
          <Typography sx={{ fontSize: { xs: "16px", sm: "18px", md: "20px" }, mt: 1 }}>
            Hear directly from our satisfied clients about their positive{" "}
            <br /> experiences with our products and services.
          </Typography>
        </Box>
        <Box sx={{ position: "relative", width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
          <Slider {...settings}>
            {sampleData.map((item, index) => (
              <div key={index}>
                <Card sx={{ maxWidth: { xs: 300, sm: 350, md: 450 }, margin: "20px auto", boxShadow: '0px 0px 10px grey', p: 3, borderRadius: '20px' }}>
                  <Rating sx={{ display: 'flex', justifyContent: 'center', width: '10px', mx: 'auto', my: 5, fontSize: { xs: '30px', sm: '35px', md: '40px' } }} name="read-only" value={value} readOnly />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'center', mt: '-20px', fontSize: { xs: '14px', sm: '16px', md: '18px' } }}>
                      "{item.description.slice(0, 140)}..."
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', fontSize: { xs: '14px', sm: '16px', md: '18px' } }}>
                      {item.title}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
