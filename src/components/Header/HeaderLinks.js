/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


// @material-ui/icons
import { ContactsRounded, AddOutlined, PhotoLibraryOutlined, SearchOutlined } from "@material-ui/icons";

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

          <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          className={classes.navLink}
        >
          <PhotoLibraryOutlined className={classes.icons} />Ver Todo
        </Button>
      </ListItem>

    </List>
  );
}
