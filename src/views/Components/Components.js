import React, { useState, useEffect } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import ListaTarjetas from './Sections/ListaTarjetas';
import Scroll from './Sections/Scroll';
import SearchBox from './Sections/SearchBox';
//import SectionTabs from "./Sections/SectionTabs.js";
//import SectionTypography from "./Sections/SectionTypography.js";
//import SectionCarousel from "./Sections/SectionCarousel.js";

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
      fetch('https://obscure-depths-14752.herokuapp.com/home')
      .then(response=> response.json())
      .then(users => {setState({...equipo, accesorios: users })})
    }, []);

    useEffect(() => {
      setState({ ...equipo, searchField: '' });
    }, []);

  const onSearchChange = (event) => {
    setState({...equipo, searchField: event.target.value });
  };

  const filteredRobots = equipo.accesorios.filter(i =>{
    return i.modelo.toLowerCase().includes(equipo.searchField);
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
      <section id="buscar">
        <SearchBox searchChange={onSearchChange}/>
          <Scroll >
            <ListaTarjetas accesorios={filteredRobots} />
          </Scroll>
          </section>
 
        {/*<SectionTypography />*/}
        {/*<SectionCarousel />*/}
       
      </div>
      <Footer />
    </div>
  );
}


export default Components;