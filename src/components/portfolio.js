import Html5 from './images/skils-icons/html5.png';
import Css3 from './images/skils-icons/css3.png';
import JavaScript from './images/skils-icons/javascript.png';
import React from './images/skils-icons/react.png';
import Expressjs from './images/skils-icons/expressjs.png';
import Nodejs from './images/skils-icons/nodejs.png';
import Mongodb from './images/skils-icons/mongodb.png';
import BootstrapLogo from './images/skils-icons/bootstrap.png';
import Sql from './images/skils-icons/sql-server.png';
import  Coffee from './images/portfolio/coffee_shop_webapp.JPG'; 
import  Sayllani from './images/portfolio/sayllani_clone.JPG'; 
import  PhotoDesign from './images/portfolio/photo_studio_webapp.JPG'; 
import  WeatherApp from './images/portfolio/weather_app.JPG'; 
import  RecipeApp from './images/portfolio/react_recipe_app.JPG'; 
import  PersonalApp from './images/portfolio/personal_app.JPG'; 
const skillsSection = {
   softwareSkills:[
    {
        skillIcon : Html5,
        skillName: "HTML 5"
    },
    {
        skillIcon : Css3,
        skillName:  "CSS 3"
    },
    {
    skillIcon : JavaScript,
    skillName: "JavaScript"
    },
    {
        skillIcon : BootstrapLogo,
        skillName: "Bootstrap"
    },
    {
        skillIcon : React,
        skillName: "React JS"
    },
    {
        skillIcon: Nodejs,
        skillName: "Node JS"
    }
    ,
    {
        skillIcon : Expressjs,
        skillName: "Express JS"
    },
    {
        skillIcon: Mongodb,
        skillName: "Mongodb"
    },
    {
        skillIcon: Sql,
        skillName: "SQL"
    }
]
}

const portfolioWork = {
    projects:[
        {
            projectImage: PhotoDesign,
            projDes: "Photo design Website",
            link:"https://photo-design-studios.surge.sh/"
        },
        {
            projectImage: Coffee,
            projDes: "Coffee Shop Website",
            link:"https://espresso-cafe-93bb2.web.app/index.html"
        },
        {
            projectImage: RecipeApp,
            projDes: "Recipe App in react",
            link:"https://recipes-app-in-react.netlify.app/"
        },
        {
            projectImage: PersonalApp,
            projDes: "Portfolio Website",
            link:""
        },
        {
            projectImage: Sayllani,
            projDes: "Sayllani Home Page Clone Website",
            link:"https://syedmuhammadharis.github.io/saylanihomaepageassignment3/#"
        },
        {
            projectImage: WeatherApp,
            projDes: "Wheather App in JS",
            link:"https://github.com/SyedMuhammadHaris/simple-weather-app-in-js"
        }
       


    ]
}

export{
    skillsSection,
    portfolioWork
}