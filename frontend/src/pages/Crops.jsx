
import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import leaf from '../assets/leaf.jpg'

const Crops = () => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{
        // backgroundColor:'green'
      }}
    >
      <Grid
        item
        xs={10}
        sm={6}
        md={4}
        lg={3}
        container
        direction="column"
        sx={{
          // backgroundColor:'#aaa',
          borderRadius: "1.5rem",
        }}
        component={Card}
        elevation={5}
      >
        <Grid
          item
          sx={{
            width: "100%",
            height: "55%",
            border: "0 0.5rem 0.5rem 0",
          }}
        >
          <img width="100%" src={leaf} alt="" />
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: "#fa1ab7",
            width: "100%",
            height: "45%",
            marginTop: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Name</Typography>
            <Typography>Potato</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Location</Typography>
            <Typography>Buea</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Planting Date</Typography>
            <Typography>21/09/2009</Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        container
        direction="column"
        sx={{
          // backgroundColor:'#aaa',
          borderRadius: "1.5rem",
        }}
        component={Card}
        elevation={5}
      >
        <Grid
          item
          sx={{
            width: "100%",
            height: "55%",
            border: "0 0.5rem 0.5rem 0",
          }}
        >
          <img width="100%" src={leaf} alt="" />
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: "#fa1ab7",
            width: "100%",
            height: "45%",
            marginTop: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Name</Typography>
            <Typography>Potato</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Location</Typography>
            <Typography>Buea</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Planting Date</Typography>
            <Typography>21/09/2009</Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        container
        direction="column"
        sx={{
          // backgroundColor:'#aaa',
          borderRadius: "1.5rem",
        }}
        component={Card}
        elevation={5}
      >
        <Grid
          item
          sx={{
            width: "100%",
            height: "55%",
            border: "0 0.5rem 0.5rem 0",
          }}
        >
          <img width="100%" src={leaf} alt="" />
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: "#fa1ab7",
            width: "100%",
            height: "45%",
            marginTop: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Name</Typography>
            <Typography>Potato</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Location</Typography>
            <Typography>Buea</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Planting Date</Typography>
            <Typography>21/09/2009</Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        container
        direction="column"
        sx={{
          // backgroundColor:'#aaa',
          borderRadius: "1.5rem",
        }}
        component={Card}
        elevation={5}
      >
        <Grid
          item
          sx={{
            width: "100%",
            height: "55%",
            border: "0 0.5rem 0.5rem 0",
          }}
        >
          <img width="100%" src={leaf} alt="" />
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: "#fa1ab7",
            width: "100%",
            height: "45%",
            marginTop: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Name</Typography>
            <Typography>Potato</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Location</Typography>
            <Typography>Buea</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Planting Date</Typography>
            <Typography>21/09/2009</Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        container
        direction="column"
        sx={{
          backgroundColor:'transparent',
          borderRadius: "1.5rem",
          // margin:'1.5rem'
        }}
        component={Card}
        elevation={5}
      >
        <Grid
          item
          sx={{
            width: "100%",
            height: "55%",
            border: "0 0.5rem 0.5rem 0",
          }}
        >
          <img width="100%" src={leaf} alt="" />
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: "#fa1ab7",
            width: "100%",
            height: "45%",
            marginTop: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Name</Typography>
            <Typography>Potato</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Location</Typography>
            <Typography>Buea</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Planting Date</Typography>
            <Typography>21/09/2009</Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Crops;
