import React from "react";
import Container from "@material-ui/core/Container";
import { Typography, Box, makeStyles, Divider } from "@material-ui/core";
import { PlatformIcons, StatusSpan } from "./Common";
import { InsightCard, ListItem, ChipList } from "./campaignComponents";
import { formatDate } from "../services/dateformat";
import { API_ENDPOINT } from "../services/config";
import PropTypes from "prop-types";

const ENDPOINT = API_ENDPOINT + "/image";

const useStyles = makeStyles({
  root: {
    margin: "40px 10px",
    height: "100%"
  },
  img: {
    width: "100%"
  },
  header: {
    lineHeight: 1.2,
    marginBottom: "10px"
  },
  insightsBox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "end"
  }
});

const CampaignView = ({ platform, data }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box display="flex" mt={2} mb={2}>
        <PlatformIcons platform={platform} />
        <Typography variant="h4" mt={15}>
          {platform}
        </Typography>
      </Box>

      <Typography variant="h6" gutterBottom>
        Insights
      </Typography>
      <Box className={classes.insightsBox} mb={1}>
        <InsightCard insights={data.insights} />
      </Box>

      <Divider />

      <ListItem mt={2}>
        <Typography variant="h6" width="25%">
          Status
        </Typography>
        <StatusSpan status={data.status} width="75%" />
      </ListItem>

      <ListItem mt={1}>
        <Typography variant="h6">Total Budget</Typography>
        <Typography variant="h6" color="primary">
          ${data.total_budget}
        </Typography>
      </ListItem>

      <ListItem mt={1}>
        <Typography variant="h6">Remaining Budget</Typography>
        <Typography variant="h6" color="secondary">
          ${data.remaining_budget}
        </Typography>
      </ListItem>

      <ListItem mt={1} mb={1}>
        <Typography variant="h6">Date Period</Typography>
        <Typography variant="h6" color="primary">
          {`${formatDate(data.start_date)} ~ ${formatDate(data.end_date)}`}
        </Typography>
      </ListItem>

      <Divider />

      <Box mt={2}>
        <Typography variant="h6">Target Audiance</Typography>
      </Box>
      <Box pl={3}>
        <ListItem mt={1}>
          <Typography variant="subtitle1">Languages</Typography>
          <Box display="flex" mr={1}>
            <ChipList
              languages={data.target_audiance.languages}
              type="outlined"
            />
          </Box>
        </ListItem>

        <ListItem mt={1}>
          <Typography variant="subtitle1">Genders</Typography>
          <Box width="75%" display="flex">
            <ChipList languages={data.target_audiance.genders} type="default" />
          </Box>
        </ListItem>

        <ListItem mt={1}>
          <Typography variant="subtitle1">Age Range</Typography>
          <Typography variant="subtitle1" color="primary">
            {`${data.target_audiance.age_range[0]} ~ ${data.target_audiance.age_range[1]}`}
          </Typography>
        </ListItem>

        <ListItem mt={1}>
          <Typography variant="subtitle1">Locations</Typography>
          <Box>
            <ChipList
              languages={data.target_audiance.locations}
              type="outlined"
            />
          </Box>
        </ListItem>

        {data.target_audiance.interests && (
          <ListItem mt={1} mb={2}>
            <Typography variant="subtitle1">Interests</Typography>
            <Box>
              <ChipList
                languages={data.target_audiance.interests}
                type="default"
              />
            </Box>
          </ListItem>
        )}

        {data.target_audiance.KeyWords && (
          <ListItem mt={1} mb={2}>
            <Typography variant="subtitle1">KeyWords</Typography>
            <Box>
              <ChipList
                languages={data.target_audiance.KeyWords}
                type="default"
              />
            </Box>
          </ListItem>
        )}
      </Box>

      <Divider />
      <Box mt={2}>
        <Typography variant="h6">Creatives</Typography>
      </Box>

      <Box mt={1} ml={1}>
        <Typography variant="h6" component="p" className={classes.header}>
          {data.creatives.header}
        </Typography>
        <Typography variant="subtitle2" component="p">
          {data.creatives.description}
        </Typography>
        <Box width="60%" mt={2}>
          <a
            href={data.creatives.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={classes.img}
              src={`${ENDPOINT}/${data.creatives.image}`}
              alt={data.creatives.image}
            />
          </a>
        </Box>
      </Box>

      <Divider />
    </Container>
  );
};

CampaignView.protoTypes = {
  platform: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

export default CampaignView;
