(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{289:function(e,t,a){"use strict";a.r(t);a(141),a(142),a(139);var n=a(0),s=a.n(n),i=a(2),r=a.n(i),o=a(290),l=a.n(o),c=a(44),d=a(293),u=a.n(d),m=a(299),p=a.n(m),g=a(301),y=a.n(g),f=a(319),h=a.n(f),v=a(304),b=a.n(v),E=a(321),A=a.n(E),S=Object(c.c)(function(e){return{secondary:{fontSize:14,color:e.status.greyDk},secondary2:{fontSize:12,color:e.status.greyDk,padding:0},primary:{fontWeight:600,color:e.status.greyDk},right:{float:"right",fontWeight:500,fontSize:12},bullet:{width:12,height:12},noPadding:{padding:0}}});function w(e){var t=e.title,a=e.company,n=e.date,i=e.listItems,r=e.noPadding,o=S();return s.a.createElement(p.a,null,s.a.createElement(y.a,{disableGutters:!0,className:r?o.noPadding:null},s.a.createElement(b.a,{classes:{secondary:o.secondary,primary:o.primary},primary:t?s.a.createElement(s.a.Fragment,null,t,n&&s.a.createElement("span",{className:o.right},n)):null,secondary:a})),i&&i.map(function(e){return s.a.createElement(y.a,{key:e,className:o.noPadding},s.a.createElement(h.a,null,s.a.createElement(A.a,{className:o.bullet})),s.a.createElement(b.a,{classes:{root:o.noPadding,secondary:o.secondary2},secondary:e}))}))}w.propTypes={classes:r.a.object,title:r.a.string,company:r.a.string,date:r.a.string,listItems:r.a.array,noPadding:r.a.bool};var k=w,M=Object(c.c)(function(e){return{secondary:{fontSize:14,color:e.status.greyDk},secondary2:{fontSize:12,color:e.status.greyDk},primary:{fontWeight:600,color:e.status.greyDk},right:{float:"right",fontSize:12,fontWeight:500}}});function D(e){var t=e.title,a=e.company,n=e.date,i=e.listItems,r=M();return s.a.createElement(p.a,null,s.a.createElement(y.a,{disableGutters:!0},s.a.createElement(b.a,{classes:{secondary:r.secondary,primary:r.primary},primary:s.a.createElement(s.a.Fragment,null,t,n&&s.a.createElement("span",{className:r.right},n)),secondary:a})),i&&i.map(function(e){return s.a.createElement(y.a,{key:e,disableGutters:!0},s.a.createElement(b.a,{classes:{secondary:r.secondary2},secondary:e}))}))}D.propTypes={classes:r.a.object,title:r.a.string,company:r.a.string,date:r.a.string,listItems:r.a.array,noPadding:r.a.bool};var P=D,I=a(322);a.d(t,"pageQuery",function(){return x});var C=Object(c.c)(function(e){var t;return{root:(t={display:"flex",justifyContent:"space-between",flexWrap:"wrap",padding:15,flexDirection:"column-reverse"},t[e.breakpoints.up("sm")]={paddingTop:30,paddingBottom:90,paddingLeft:"10%",paddingRight:"10%"},t[e.breakpoints.up("md")]={paddingTop:30,paddingBottom:90,flexDirection:"row"},t),col1:{flexBasis:"30%"},col2:{flexBasis:"65%"},title:{letterSpacing:5,paddingBottom:15,paddingTop:15,textTransform:"uppercase"},paddingTop:{paddingTop:45},skills:{display:"flex",justifyContent:"space-between"}}});function R(e){var t=e.data,a=C(),n=t.allImageSharp.edges.find(function(e){return e.node.fluid.src.includes("author")});return s.a.createElement(I.a,{img:n},s.a.createElement("div",{className:a.root},s.a.createElement("div",{className:a.col1},s.a.createElement(u.a,{variant:"subtitle1",color:"primary",className:a.title},"education"),s.a.createElement(P,{title:"Master’s Degree",date:"Graduated 2012",company:"Auburn University (Auburn, AL, USA)",listItems:["Estimation of Survival of the Atlantic Horseshoe Crab, Limulus polyphemus, by Analysis of Mark-Recapture Data with Tag Loss"]}),s.a.createElement(P,{title:"Bachelor of Science",date:"Graduated 2008",company:"University of Washington (Seattle, WA, USA)",listItems:["Major in Biology and a Minor in Applied Mathematics"]}),s.a.createElement(u.a,{variant:"subtitle1",color:"primary",className:l()(a.title,a.paddingTop)},"languages"),s.a.createElement(k,{title:"English",date:"Proficient, Native",noPadding:!0}),s.a.createElement(k,{title:"German",date:"Intermediate: B1.2",noPadding:!0}),s.a.createElement(k,{title:"French",date:"Beginner: A2.1",noPadding:!0}),s.a.createElement(u.a,{variant:"subtitle1",color:"primary",className:l()(a.title,a.paddingTop)},"skills"),s.a.createElement("div",{className:a.skills},s.a.createElement(k,{company:"Languages",listItems:["Javascript","R","Python","GraphQL"]}),s.a.createElement(k,{company:"Development",listItems:["React","Gatsby","Redux","Material-UI","Bootstrap","Styled Components"]}),s.a.createElement(k,{company:"Charting",listItems:["Highcharts","ggplot2","Shiny","D3.js"]}))),s.a.createElement("div",{className:a.col2},s.a.createElement(u.a,{variant:"subtitle1",color:"primary",className:a.title},"experience"),s.a.createElement(k,{title:"Data Specialist",date:"July 2017 - Present",company:"OSB AG Ingenieur- und IT-Dienstleistungen (Munich, Germany)",listItems:["Developed shopper science tool for the analysis of customer data","Expert front end web development skills using React","Expert chart developer using Highcharts"]}),s.a.createElement(k,{title:"Part-time Lecturer",date:"June 2017 - July 2017",company:"Globe Business College Munich (Munich, Germany)",listItems:["Lectured for course, 'Quantative Analysis for Business'"]}),s.a.createElement(k,{title:"Junior Analyst",date:"June 2015 - Feburary 2017",company:"Tempest Technologies Consulting (Los Angeles, CA, USA)",listItems:["Developed user interface for a government funded project to assist the biomedical industry in Experimental Design (Webpage Development with; (backend) Python, Node, SQLite / (frontend) AngularJS, bootstrap / (testing) Karma, Protractor)","Developed online statistical tools to calculate statistical power and sample size (R, Shiny and SQLite)","Teamed with analysts and engineers from within the company as well as client personnel to accomplish projects"]}),s.a.createElement(k,{title:"Customer Service and Merchandising Associate",date:"January 2015 - June 2015",company:"Design Public (Los Angeles, CA, USA)",listItems:["Assisted with daily customer interactions maintaining 100% satisfaction rating","Data Entry for inventory and updates to website when necessary"]}),s.a.createElement(k,{title:"Research Associate in Data Analysis",date:"January 2013 - January 2015",company:"University of Quebec at Rimouski (Rimouski, QC, Canada)",listItems:["Contributed to the development of a model to simulate and optimize individual tree growth under changing climatic conditions that focuses on the competition between differing neighboring species using Bayesian methods","Developed and lead short course 'Use of Maximum Likelihood Methods for Ecology'","Completed preliminary analyses on the effects of different distributions for basic stochastic models","Completed data management for a dataset consisting of over 100,000 rows in R and Python"]}),s.a.createElement(k,{title:"Masters Research Associate: Analysis of Survival Models for United States Geological Survey",date:"January 2011 - January 2013",company:"Auburn University (Auburn, AL, USA)",listItems:["Designed and developed a multistate model to estimate adult survival of the Atlantic Horseshoe crab, Limulus polyphemus.  Model analyzed ten years of mark-resight data with the incorporation of a bias from tag loss.  Results used to improve populations of managed Horseshoe crab harvests for United States Geological Survey.","Published Results","Expert Program MARK (Life Survival Models) and Statistics Program R programmer","Audited a variety of Structured Decision Making workshops held at Auburn University","Advanced coursework and workshops in Survival Models, Maximum Likelihood Methods, and Regression Analysis"]}),s.a.createElement(k,{title:"Supervisor, Accreditation Analyst",date:"January 2009 - December 2010",company:"Pali Institute (Running Springs, CA, USA)",listItems:["Western Association of Schools and Colleges Accreditation Analyst","Managed the instructional staff, training and daily program activities","Successfully carried out school’s renewal of accreditation with final reports and tour of program goals to measure and validate student achievement","Assessed school’s action plan success using California academic standards and WASC criteria"]}))))}R.propTypes={classes:r.a.object,data:r.a.object};t.default=R;var x="3941034921"},319:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s.default}});var s=n(a(320))},320:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var s=n(a(3)),i=n(a(10)),r=n(a(0)),o=(n(a(2)),n(a(290))),l=n(a(135)),c=function(e){return{root:{marginRight:16,color:e.palette.action.active,flexShrink:0,display:"inline-flex"}}};t.styles=c;var d=(0,l.default)(c,{name:"MuiListItemIcon"})(function(e){var t=e.children,a=e.classes,n=e.className,l=(0,i.default)(e,["children","classes","className"]);return r.default.createElement("div",(0,s.default)({className:(0,o.default)(a.root,n)},l),t)});t.default=d},321:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(0)),i=(0,n(a(292)).default)(s.default.createElement(s.default.Fragment,null,s.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),s.default.createElement("path",{d:"M6 6h12v12H6z"})),"Stop");t.default=i}}]);
//# sourceMappingURL=component---src-pages-resume-js-43d374d81af5a06bf15f.js.map