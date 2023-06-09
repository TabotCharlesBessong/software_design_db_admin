import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import data from "../constants/data";
import leaf from '../assets/leaf.jpg'

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding:16
  },
  card: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    height: 200,
  },
}));

const Diseases = () => {
  const classes = useStyles();
  const diseases = data.diseases

  return (
    <Grid container spacing={2} className={classes.gridContainer}>
      {diseases.map((disease) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={disease.name}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={leaf}
              title={disease.name}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {disease.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Affects: {disease.plants.join(", ")}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Treatment: {disease.treatment}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Diseases;
