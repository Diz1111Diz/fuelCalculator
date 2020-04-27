import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";

import {
  Typography,
  CardMedia,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

const ChoceMarcCar = ({ arrCars, getCarMarc }) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const useStyles = makeStyles((theme) => ({
    cover: {
      width: 120,
      paddingRight: 30,
    },
    title: {
      fontWeight: 800,
      fontSize: 18,
    },
    nameLogo: {},
  }));
  const classes = useStyles();

  return (
    <>
      {arrCars.map((el, index) => (
        <ExpansionPanel
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
        >
          <ExpansionPanelSummary
            children
            className={classes.Panel}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            expandIcon={<ExpandMoreIcon />}
          >
            <Grid
              className={classes.grid}
              container
              alignItems="center"
              direction="row"
            >
              <CardMedia
                className={classes.cover}
                image={el.logo}
                component="img"
              />

              <h2 className={classes.title}>{el.car}</h2>
            </Grid>
          </ExpansionPanelSummary>

          {el.model.map((marc) => (
            <ExpansionPanelDetails
              onClick={() => getCarMarc(marc)}
              id={marc.name}
            >
              <Grid
                className={classes.grid}
                container
                alignItems="center"
                direction="row"
              >
                <CardMedia
                  className={classes.cover}
                  image={marc.img}
                  component="img"
                />
                <Typography className={classes.title} component="h2">
                  {marc.name}
                </Typography>
              </Grid>
            </ExpansionPanelDetails>
          ))}
        </ExpansionPanel>
      ))}
    </>
  );
};

export default ChoceMarcCar;
