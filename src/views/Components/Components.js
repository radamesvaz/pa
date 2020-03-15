import React, { useState, useEffect } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
//import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import ListaTarjetas from './Sections/ListaTarjetas';
import Scroll from './Sections/Scroll';
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
      searchField: ""
    }
  );

    useEffect(() => {
      // code to run on component mount
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {setState({...equipo, accesorios: users })})
    }, []);

    useEffect(() => {
      setState({ ...equipo, searchField: '' });
    }, []);

  const onSearchChange = (event) => {
    setState({...equipo, searchField: event.target.value });
  };

  const filteredRobots = equipo.accesorios.filter(cosa =>{
    return cosa.name.toLowerCase().includes(equipo.searchField);
  });


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
          <Scroll >
          <ListaTarjetas accesorios={filteredRobots} />
          </Scroll>
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