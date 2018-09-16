import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import ResumeEntry from "../components/ResumeEntry";
import ResumeEntrySmall from "../components/ResumeEntrySmall";
import Layout from "../layouts/layout";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 15,
    flexDirection: "column-reverse",
    [theme.breakpoints.up("sm")]: {
      paddingTop: 30,
      paddingBottom: 90,
      paddingLeft: "10%",
      paddingRight: "10%"
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: 30,
      paddingBottom: 90,
      flexDirection: "row"
    }
  },
  col1: {
    flexBasis: "30%"
  },
  col2: {
    flexBasis: "65%"
  },
  title: {
    letterSpacing: 5,
    paddingBottom: 15,
    paddingTop: 15,
    textTransform: "uppercase"
  },
  paddingTop: {
    paddingTop: 45
  },
  skills: {
    display: "flex",
    justifyContent: "space-between"
  }
});

class Resume extends Component {
  render() {
    let { data, classes } = this.props;
    const authorImg = data.allImageSharp.edges.find(x =>
      x.node.fluid.src.includes("author")
    );
    return (
      <Layout img={authorImg}>
        <div className={classes.root}>
          <div className={classes.col1}>
            <Typography
              variant="subheading"
              color="primary"
              className={classes.title}
            >
              education
            </Typography>
            <ResumeEntrySmall
              title="Master’s Degree"
              date="Graduated 2012"
              company="Auburn University (Auburn, AL, USA)"
              listItems={[
                `Estimation of Survival of the Atlantic Horseshoe Crab, Limulus polyphemus, by Analysis of Mark-Recapture Data with Tag Loss`
              ]}
            />
            <ResumeEntrySmall
              title="Bachelor of Science"
              date="Graduated 2008"
              company="University of Washington (Seattle, WA, USA)"
              listItems={[
                "Major in Biology and a Minor in Applied Mathematics"
              ]}
            />
            <Typography
              variant="subheading"
              color="primary"
              className={classnames(classes.title, classes.paddingTop)}
            >
              languages
            </Typography>
            <ResumeEntry title="English" date="Proficient, Native" noPadding />
            <ResumeEntry title="German" date="Intermediate: B1.2" noPadding />
            <ResumeEntry title="French" date="Beginner: A2.1" noPadding />
            <Typography
              variant="subheading"
              color="primary"
              className={classnames(classes.title, classes.paddingTop)}
            >
              skills
            </Typography>
            <div className={classes.skills}>
              <ResumeEntry
                company="Data Analysis"
                listItems={["R", "Python"]}
              />
              <ResumeEntry
                company="Development"
                listItems={[
                  "Javascript",
                  "React",
                  "Gatsby",
                  "JSS",
                  "Material UI",
                  "Bootstrap"
                ]}
              />
              <ResumeEntry
                company="Charting"
                listItems={["Highcharts", "ggplot2", "Shiny"]}
              />
            </div>
          </div>
          <div className={classes.col2}>
            <Typography
              variant="subheading"
              color="primary"
              className={classes.title}
            >
              experience
            </Typography>
            <ResumeEntry
              title="Data Specialist"
              date="July 2017 - Present"
              company="OSB AG Ingenieur- und IT-Dienstleistungen (Munich, Germany)"
              listItems={[
                "Developed shopper science tool for the analysis of customer data",
                "Expert front end web development skills using React",
                "Expert chart developer using Highcharts"
              ]}
            />
            <ResumeEntry
              title="Part-time Lecturer"
              date="June 2017 - July 2017"
              company="Globe Business College Munich (Munich, Germany)"
              listItems={[
                "Lectured for course, 'Quantative Analysis for Business'"
              ]}
            />
            <ResumeEntry
              title="Junior Analyst"
              date="June 2015 - Feburary 2017"
              company="Tempest Technologies Consulting (Los Angeles, CA, USA)"
              listItems={[
                "Developed user interface for a government funded project to assist the biomedical industry in Experimental Design (Webpage Development with; (backend) Python, Node, SQLite / (frontend) AngularJS, bootstrap / (testing) Karma, Protractor)",
                "Developed online statistical tools to calculate statistical power and sample size (R, Shiny and SQLite)",
                "Teamed with analysts and engineers from within the company as well as client personnel to accomplish projects"
              ]}
            />
            <ResumeEntry
              title="Customer Service and Merchandising Associate"
              date="January 2015 - June 2015"
              company="Design Public (Los Angeles, CA, USA)"
              listItems={[
                "Assisted with daily customer interactions maintaining 100% satisfaction rating",
                "Data Entry for inventory and updates to website when necessary"
              ]}
            />
            <ResumeEntry
              title="Research Associate in Data Analysis"
              date="January 2013 - January 2015"
              company="University of Quebec at Rimouski (Rimouski, QC, Canada)"
              listItems={[
                "Contributed to the development of a model to simulate and optimize individual tree growth under changing climatic conditions that focuses on the competition between differing neighboring species using Bayesian methods",
                `Developed and lead short course 'Use of Maximum Likelihood Methods for Ecology'`,
                "Completed preliminary analyses on the effects of different distributions for basic stochastic models",
                "Completed data management for a dataset consisting of over 100,000 rows in R and Python"
              ]}
            />
            <ResumeEntry
              title="Masters Research Associate: Analysis of Survival Models for United States Geological Survey"
              date="January 2011 - January 2013"
              company="Auburn University (Auburn, AL, USA)"
              listItems={[
                "Designed and developed a multistate model to estimate adult survival of the Atlantic Horseshoe crab, Limulus polyphemus.  Model analyzed ten years of mark-resight data with the incorporation of a bias from tag loss.  Results used to improve populations of managed Horseshoe crab harvests for United States Geological Survey.",
                "Published Results",
                "Expert Program MARK (Life Survival Models) and Statistics Program R programmer",
                "Audited a variety of Structured Decision Making workshops held at Auburn University",
                "Advanced coursework and workshops in Survival Models, Maximum Likelihood Methods, and Regression Analysis"
              ]}
            />
            <ResumeEntry
              title="Supervisor, Accreditation Analyst"
              date="January 2009 - December 2010"
              company="Pali Institute (Running Springs, CA, USA)"
              listItems={[
                "Western Association of Schools and Colleges Accreditation Analyst",
                "Managed the instructional staff, training and daily program activities",
                "Successfully carried out school’s renewal of accreditation with final reports and tour of program goals to measure and validate student achievement",
                "Assessed school’s action plan success using California academic standards and WASC criteria"
              ]}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

Resume.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Resume);

export const pageQuery = graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
