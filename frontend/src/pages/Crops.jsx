
// import { Box, Card, Grid, Typography } from "@mui/material";
// import React from "react";
// import leaf from '../assets/leaf.jpg'

// const Crops = () => {
//   return (
//     <Grid
//       container
//       direction="row"
//       alignItems="center"
//       justifyContent="center"
//       spacing={2}
//       sx={{
//         // backgroundColor:'green'
//       }}
//     >
//       <Grid
//         item
//         xs={10}
//         sm={6}
//         md={4}
//         lg={3}
//         container
//         direction="column"
//         sx={{
//           // backgroundColor:'#aaa',
//           borderRadius: "1.5rem",
//         }}
//         component={Card}
//         elevation={5}
//       >
//         <Grid
//           item
//           sx={{
//             width: "100%",
//             height: "55%",
//             border: "0 0.5rem 0.5rem 0",
//           }}
//         >
//           <img width="100%" src={leaf} alt="" />
//         </Grid>
//         <Grid
//           item
//           sx={{
//             backgroundColor: "#fa1ab7",
//             width: "100%",
//             height: "45%",
//             marginTop: "1rem",
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Typography>Name</Typography>
//             <Typography>Potato</Typography>
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Typography>Location</Typography>
//             <Typography>Buea</Typography>
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Typography>Planting Date</Typography>
//             <Typography>21/09/2009</Typography>
//           </Box>
//         </Grid>
//       </Grid>

//       <Grid
//         item
//         xs={12}
//         sm={6}
//         md={4}
//         lg={3}
//         container
//         direction="column"
//         sx={{
//           // backgroundColor:'#aaa',
//           borderRadius: "1.5rem",
//         }}
//         component={Card}
//         elevation={5}
//       >
//         <Grid
//           item
//           sx={{
//             width: "100%",
//             height: "55%",
//             border: "0 0.5rem 0.5rem 0",
//           }}
//         >
//           <img width="100%" src={leaf} alt="" />
//         </Grid>
//         <Grid
//           item
//           sx={{
//             backgroundColor: "#fa1ab7",
//             width: "100%",
//             height: "45%",
//             marginTop: "1rem",
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Typography>Name</Typography>
//             <Typography>Potato</Typography>
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Typography>Location</Typography>
//             <Typography>Buea</Typography>
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Typography>Planting Date</Typography>
//             <Typography>21/09/2009</Typography>
//           </Box>
//         </Grid>
//       </Grid>

//       <Grid
//         item
//         xs={12}
//         sm={6}
//         md={4}
//         lg={3}
//         container
//         direction="column"
//         sx={{
//           // backgroundColor:'#aaa',
//           borderRadius: "1.5rem",
//         }}
//         component={Card}
//         elevation={5}
//       >
//         <Grid
//           item
//           sx={{
//             width: "100%",
//             height: "55%",
//             border: "0 0.5rem 0.5rem 0",
//           }}
//         >
//           <img width="100%" src={leaf} alt="" />
//         </Grid>
//         <Grid
//           item
//           sx={{
//             backgroundColor: "#fa1ab7",
//             width: "100%",
//             height: "45%",
//             marginTop: "1rem",
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Typography>Name</Typography>
//             <Typography>Potato</Typography>
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Typography>Location</Typography>
//             <Typography>Buea</Typography>
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Typography>Planting Date</Typography>
//             <Typography>21/09/2009</Typography>
//           </Box>
//         </Grid>
//       </Grid>

//       <Grid
//         item
//         xs={12}
//         sm={6}
//         md={4}
//         lg={3}
//         container
//         direction="column"
//         sx={{
//           // backgroundColor:'#aaa',
//           borderRadius: "1.5rem",
//         }}
//         component={Card}
//         elevation={5}
//       >
//         <Grid
//           item
//           sx={{
//             width: "100%",
//             height: "55%",
//             border: "0 0.5rem 0.5rem 0",
//           }}
//         >
//           <img width="100%" src={leaf} alt="" />
//         </Grid>
//         <Grid
//           item
//           sx={{
//             backgroundColor: "#fa1ab7",
//             width: "100%",
//             height: "45%",
//             marginTop: "1rem",
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Typography>Name</Typography>
//             <Typography>Potato</Typography>
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Typography>Location</Typography>
//             <Typography>Buea</Typography>
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Typography>Planting Date</Typography>
//             <Typography>21/09/2009</Typography>
//           </Box>
//         </Grid>
//       </Grid>

//       <Grid
//         item
//         xs={12}
//         sm={6}
//         md={4}
//         lg={3}
//         container
//         direction="column"
//         sx={{
//           backgroundColor:'transparent',
//           borderRadius: "1.5rem",
//           // margin:'1.5rem'
//         }}
//         component={Card}
//         elevation={5}
//       >
//         <Grid
//           item
//           sx={{
//             width: "100%",
//             height: "55%",
//             border: "0 0.5rem 0.5rem 0",
//           }}
//         >
//           <img width="100%" src={leaf} alt="" />
//         </Grid>
//         <Grid
//           item
//           sx={{
//             backgroundColor: "#fa1ab7",
//             width: "100%",
//             height: "45%",
//             marginTop: "1rem",
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Typography>Name</Typography>
//             <Typography>Potato</Typography>
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Typography>Location</Typography>
//             <Typography>Buea</Typography>
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Typography>Planting Date</Typography>
//             <Typography>21/09/2009</Typography>
//           </Box>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export default Crops;

import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import leaf from "../assets/leaf.jpg";

const Crops = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: "1rem",
      }}
    >
      {[...Array(13)].map((_, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
              <img width="100%" src={leaf} alt="" />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-1rem",
                  left: "1rem",
                  padding: "0.5rem",
                  borderRadius: "50%",
                  bgcolor: "#ffffff",
                  boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: "bold",
                    color: "#1B5E20",
                  }}
                >
                  Potato
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
                Buea
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
                21/09/2009
              </Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Crops;
