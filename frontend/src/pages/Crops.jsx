

import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import leaf from "../assets/leaf.jpg";
import data from '../constants/data'

const Crops = () => {
  const plants  = data.plants
  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: "1rem",
      }}
    >
      {plants.map((plant) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={plant.id}>
          <Card
            sx={{
              borderRadius: "1.5rem",
              bgcolor: "#ffffff",
              boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.1)",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "55%",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img width="100%" src={plant.image} alt="name" />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-1rem",
                  left: "1rem",
                  padding: "0.5rem",
                  borderRadius: "50%",
                  bgcolor: "#ffffff",
                  boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.2)",
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'space-between'
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: "bold",
                    color: "#1B5E20",
                  }}
                >
                  Plant Name:
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: "bold",
                    color: "#1B5E20",
                  }}
                >
                  {plant.name}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "auto 1rem",
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  fontWeight: "bold",
                  color: "#1B5E20",
                }}
              >
                Location
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#424242",
                }}
              >
                {plant.location}
              </Typography>
            </Box>
            <Box
              sx={{
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "auto 1rem",
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  fontWeight: "bold",
                  color: "#1B5E20",
                  marginTop: "0.5rem",
                }}
              >
                Planting Date
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#424242",
                }}
              >
                {plant.planting_date}
              </Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Crops;
