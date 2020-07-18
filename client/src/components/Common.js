import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GoogleIcon from "../assets/google.svg";
import PropTypes from "prop-types";
import {
  amber,
  green,
  teal,
  indigo,
  purple,
  blue
} from "@material-ui/core/colors";

const STATUS_BACKGROUND_COLOR = {
  Delivering: amber[100],
  Ended: green[100],
  Scheduled: teal[100]
};

const PLATFORM_ICON_COLOR = {
  facebook: indigo[500],
  instagram: purple[500],
  google: blue[900]
};

const STATUS_FONT_COLOR = {
  Delivering: amber[700],
  Ended: green[700],
  Scheduled: teal[500]
};

const useStyles = makeStyles({
  list: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    padding: 0,
    margin: 0
  }
});

/**
 *  Render Platform Icon from it's name
 * @Function Component
 * @param {String} platform
 */

export const PlatformIcons = ({ platform }) => {
  const platforms = {
    facebook: <FacebookIcon style={{ fontSize: 50, color: indigo[500] }} />,
    instagram: <InstagramIcon style={{ fontSize: 50, color: purple[500] }} />,
    google: (
      <img
        style={{ width: 45, height: 45, marginTop: 2 }}
        src={GoogleIcon}
        alt="Google"
      />
    )
  };
  return platforms[platform];
};
PlatformIcons.protoTypes = {
  platform: PropTypes.string.isRequired
};

/**
 *  Render Status Span from it's name
 * @Function Component
 * @param {String} status : Ended, Delivering, Scheduled
 */
export const StatusSpan = ({ status }) => (
  <span
    style={{
      borderRadius: 5,
      padding: "5px 15px",
      backgroundColor: STATUS_BACKGROUND_COLOR[status],
      color: STATUS_FONT_COLOR[status],
      fontWeight: 700,
      fontSize: 16
    }}
  >
    {status}
  </span>
);
StatusSpan.protoTypes = {
  status: PropTypes.string.isRequired
};

/**
 *  Render Platform Box having list of platform icons linked to it's detail view
 * @Function Component
 */
export const PlatformBox = ({ item, index, handleClick }) => {
  const classes = useStyles();
  return (
    <ul className={classes.list}>
      {Object.keys(item.platforms).map(platform => (
        <li key={platform}>
          <Link
            to=""
            onClick={() => handleClick(index, platform)}
            style={{ color: PLATFORM_ICON_COLOR[platform] }}
          >
            {<PlatformIcons platform={platform} />}
          </Link>
        </li>
      ))}
    </ul>
  );
};

PlatformBox.protoTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default {
  StatusSpan,
  PlatformBox,
  PlatformIcons
};
