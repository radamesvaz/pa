import React, { useState } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import ListaTarjetas from './Sections/ListaTarjetas';
import { equipos } from './Sections/equipos';
import SearchBox from './Sections/SearchBox';
//import SectionBasics from "./Sections/SectionBasics.js";
//import SectionNavbars from "./Sections/SectionNavbars.js";
//import SectionTabs from "./Sections/SectionTabs.js";
//import SectionPills from "./Sections/SectionPills.js";
//import SectionTypography from "./Sections/SectionTypography.js";
//import SectionJavascript from "./Sections/SectionJavascript.js";
//import SectionCarousel from "./Sections/SectionCarousel.js";
//import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
//import SectionLogin from "./Sections/SectionLogin.js";
//import SectionExamples from "./Sections/SectionExamples.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

function Components(props) {

  const classes = useStyles();
  const { ...rest } = props;

  const [equipo, setState] = useState(
    {
      accesorios: [],
      searchField: ''
    }
  );

  const onSearchChange = (event) => {
   setState({...equipo, searchField: event.target.value });
   console.log(equipo);
  };
 
  return (
    <div>
      <Header
        brand="Planeta Accesorios"
        rightLinks={<HeaderLinks />}
        fixed
        href="#"
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/banner.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Planeta Accesorios</h1>
                <h3 className={classes.subtitle}>
                  Tenemos los mejores accesorios para los equipos mas usados
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SearchBox searchChange={onSearchChange}/>
        <ListaTarjetas equipos={equipos} />
        {/*<SectionBasics />*/}
        {/*<SectionNavbars />*/}
        {/*<SectionTabs />*/}
        {/*<SectionPills />*/}
        {/*<SectionTypography />*/}
        {/*<SectionJavascript />*/}
        {/*<SectionCarousel />*/}
       {/* <SectionCompletedExamples /> */}
        {/*<SectionLogin />*/}
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              ;)
            </Button>
          </Link>
        </GridItem>
        {/* <SectionExamples /> */}
      </div>
      {/*<Footer />*/}
    </div>
  );
}


export default Components;