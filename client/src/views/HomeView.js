import React, { useState } from "react";
import {
  Container,
  Typography,
  makeStyles,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody
} from "@material-ui/core";

import { useSelector } from "react-redux";
import { StatusSpan, PlatformBox } from "../components/Common";
import Modal from "@material-ui/core/Modal";
import CampaignView from "../components/campaign";

const useStyles = makeStyles({
  root: {
    marginTop: 80,
    display: "flex",
    justifyContent: "space-evenly"
  },
  title: {
    marginTop: 100,
    marginBottom: 60
  },
  table: {
    marginLeft: 40,
    marginRight: 40
  },
  headerCell: {
    fontSize: 15
  },
  paper: {
    width: 1000,
    maxHeight: 965,
    backgroundColor: "#fff",
    border: "2px solid #000",
    overflow: "scroll"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

const tableInfo = [
  {
    title: "ID",
    value: item => <Typography variant="subtitle1">{item.id}</Typography>,
    align: "center"
  },
  {
    title: "Name",
    value: item => <Typography variant="subtitle1">{item.name}</Typography>,
    align: "center"
  },
  {
    title: "Goal",
    value: item => <Typography variant="subtitle1">{item.goal}</Typography>,
    align: "center"
  },
  {
    title: "Total Budget",
    value: item => (
      <Typography variant="subtitle1">{`$${item.total_budget}`}</Typography>
    ),
    align: "center"
  },
  {
    title: "Platforms",
    value: (item, index, handleClick) => (
      <PlatformBox item={item} index={index} handleClick={handleClick} />
    ),
    align: "center"
  },
  {
    title: "Status",
    value: item => <StatusSpan status={item.status} />,
    align: "center"
  }
];

const HomeView = () => {
  const classes = useStyles();
  const [modalOpen, setMoalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const campaign = useSelector(state => {
    return state.campaign.toJS();
  });

  if (campaign.error) {
    return <h1>{campaign.error}</h1>;
  }

  if (campaign.fetching) {
    return <h1>Loading Data...</h1>;
  }

  const handleClose = () => {
    setMoalOpen(false);
  };

  const campaignList = campaign.result;

  const handlePlatformClick = (index, platform) => {
    setModalData({
      platform: platform,
      data: campaignList[index]["platforms"][platform]
    });
    setMoalOpen(true);
  };

  if (!campaignList) return null;

  return (
    <Container>
      <Typography className={classes.title} variant="h5">
        Advertising Campaigns
      </Typography>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {tableInfo.map((item, index) => (
              <TableCell key={index} align="center">
                {item.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {campaignList.map((item, campaignIndex) => (
            <TableRow key={campaignIndex}>
              {tableInfo.map((cell, index) => (
                <TableCell key={`${item.id}_${index}`} align={cell.align}>
                  {cell.value(item, campaignIndex, handlePlatformClick)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={modalOpen}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <CampaignView {...modalData} />
        </div>
      </Modal>
    </Container>
  );
};

export default HomeView;
