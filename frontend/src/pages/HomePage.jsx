import { Box, Container, Grid, Typography } from "@mui/material";
import vegetable from '../assets/leaf.jpg'
import React from "react";

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{marginTop:'4rem'}} >
      <Box sx={{ py: "4rem" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", mb: "2rem" }}
        >
          Crop Diseases
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                bgcolor: "#F5F5F5",
                borderRadius: "1.5rem",
                p: "2rem",
                height: "100%",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: "1rem" }}>
                Tomato Blight
              </Typography>
              <Typography variant="body1" sx={{ color: "#424242" }}>
                Tomato blight is a common disease that affects tomato plants. It
                is caused by a fungus that thrives in warm, humid conditions and
                can quickly spread through a crop.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                bgcolor: "#F5F5F5",
                borderRadius: "1.5rem",
                p: "2rem",
                height: "100%",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: "1rem" }}>
                Potato Late Blight
              </Typography>
              <Typography variant="body1" sx={{ color: "#424242" }}>
                Potato late blight is a fungal disease that attacks potato
                plants and can cause significant yield losses if not properly
                managed. It thrives in cool, wet conditions and can infect the
                leaves, stems, and tubers of the plant.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                bgcolor: "#F5F5F5",
                borderRadius: "1.5rem",
                p: "2rem",
                height: "100%",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: "1rem" }}>
                Wheat Rust
              </Typography>
              <Typography variant="body1" sx={{ color: "#424242" }}>
                Wheat rust is a fungal disease that affects wheat plants and can
                significantly reduce crop yields. It is caused by several
                species of the fungus Puccinia and can infect the leaves, stems,
                and grains of the plant.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ py: "4rem" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", mb: "2rem" }}
        >
          The Importance of Eating Healthy Vegetables
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={vegetable}
                alt="vegetables"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ color: "#424242" }}>
              Eating a healthy diet that includes plenty of vegetables is
              important for maintaining good health. Vegetables are a rich
              source of vitamins, minerals, and fiber, and can help reduce the
              risk of many chronic diseases, such as heart disease, diabetes,
              and cancer.
            </Typography>
            <Box sx={{ mt: "2rem" }}>
              <Typography variant="body1" sx={{ color: "#424242" }}>
                By eating a variety of different colored vegetables, you can
                ensure that you are getting a wide range of nutrients. Some
                examples of healthy vegetables include leafy greens like spinach
                and kale, cruciferous vegetables like broccoli and cauliflower,
                and colorful vegetables like peppers and carrots.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
