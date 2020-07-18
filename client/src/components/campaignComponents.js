import React from "react";
import { Typography, Box, Chip, makeStyles } from "@material-ui/core";
import {
  green,
  lightBlue,
  teal,
  deepPurple,
  blue,
  orange,
  pink
} from "@material-ui/core/colors";
import PropTypes from "prop-types";

const InsightsColor = [
  green[500],
  lightBlue[500],
  teal[500],
  deepPurple[500],
  blue[500],
  orange[500],
  pink[500]
];

const useStyles = makeStyles({
  cardRoot: {
    margin: 10,
    padding: "5px 20px",
    width: 150,
    height: 60,
    boxShadow: "0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)"
  },
  outlined: {
    padding: "0 5px",
    marginRight: 10,
    marginBottom: 10
  },
  default: {
    padding: "0 10px",
    marginRight: 10,
    marginBottom: 10
  }
});

/**
 *  Render Insights Box having insights cards
 * @Function Component
 * @param {Array of String} insights
 * @param {String} Chip type default: filled, outlined: outlined
 */

export const InsightCard = ({ insights }) => {
  const classes = useStyles();
  return Object.keys(insights).map((key, index) => {
    return (
      <Box
        className={classes.cardRoot}
        key={key}
        style={{ borderLeft: `solid 5px ${InsightsColor[index]}` }}
      >
        <Typography variant="body2" color="textSecondary" component="p">
          {key.replace(/_/g, " ").toUpperCase()}
        </Typography>
        <Typography variant="h5" component="p">
          {insights[key]}
        </Typography>
      </Box>
    );
  });
};

InsightCard.protoTypes = {
  insights: PropTypes.array.isRequired
};

/**
 *  Render 2 children component nested in 2 columned Box.
 * @Function Component
 * @param {Array} children
 * @param {Object} ptions
 */

export const ListItem = ({ children, ...others }) => (
  <Box display="flex" alignItems="center" {...others}>
    <Box width="25%">{children[0]}</Box>
    <Box width="75%">{children[1]}</Box>
  </Box>
);

ListItem.protoTypes = {
  children: PropTypes.element.isRequired
};

/**
 *  Render list of Chips from string array
 * @Function Component
 * @param {Array of String} languages
 * @param {String} Chip type default: filled, outlined: outlined
 */

export const ChipList = ({ languages, type }) => {
  const classes = useStyles();
  return languages.map((item, index) => (
    <Chip
      className={classes[type]}
      key={index}
      label={item}
      color="primary"
      size="medium"
      variant={type}
    />
  ));
};

ChipList.protoTypes = {
  languages: PropTypes.arrayOf(String).isRequired,
  type: PropTypes.string
};
