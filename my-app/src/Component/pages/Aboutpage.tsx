// AboutPage.tsx
import React from "react";
import Header from "./Elements/Header";
import Footer from "./Elements/Footer";
import { Typography, Container, Box, Paper } from "@mui/material";
import foods from "./foods.jpg";

const AboutPage = () => {
return (
    <>
    <Header />
    <img className="burger" src={foods} />
        <Container maxWidth="md">
            <Box my={4}>
                <Typography variant="h2" component="h1" gutterBottom>
             About Us
                </Typography>
                <Paper elevation={3} style={{ padding: "20px", marginTop: "20px", borderRadius: "5%" }}>
                    <Typography variant="h5" component="h3" gutterBottom>
                       Our Foundation
                    </Typography>
                    <Typography paragraph>
            Foods Around The World was founded in 2024 by a group of friends who wanted to bring the taste of the world to the people of the world. We have been serving our customers with the best foods from around the world ever since. Our mission is to bring the world closer together through the power of food.
            </Typography>
            <Typography variant="h5" component="h3" gutterBottom>
              Our Philosophy
            </Typography>
            <Typography paragraph>
            At Foods Around The World, we believe that food is more than just sustenance. Food is a way to bring people together, to share culture and tradition, and to create memories that last a lifetime. That's why we are committed to serving the best foods from around the world, made with love and care.
            </Typography>
            <Typography variant="h5" component="h3" gutterBottom>
              Join Us
            </Typography>
            <Typography paragraph>
            We invite you to join us on our journey to bring the world closer together through the power of food. Whether you're a food lover, a world traveler, or just someone who enjoys a good meal, there's a place for you at Foods Around The World. Come visit us today and experience the taste of the world!
            </Typography>
          </Paper>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;