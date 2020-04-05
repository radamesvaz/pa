/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


// @material-ui/icons
import {  PhotoLibraryOutlined, SearchOutlined } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>

          <ListItem className={classes.listItem}>
            <Button
            href="#buscar"
            color="transparent"
            className={classes.navLink}
            >
              <SearchOutlined className={classes.icons} /> Buscar
            </Button>
          </ListItem>


    </List>
  );
}
