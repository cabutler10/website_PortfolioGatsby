import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Box, Container, Typography, IconButton } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"

const About = () => (
  <Box
    sx={{
      py: { xs: 6, md: 12 },
    }}
  >
    <Typography variant="subtitle1" align="center" sx={{ pb: 6 }}>
      About Me
    </Typography>
    <Container sx={{ display: "flex", alignItems: "center" }}>
      <Box
        sx={{
          flexBasis: { xs: "100%", sm: "70%", md: "50%" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <Typography sx={{ pb: 4 }}>
            I am a Data Scientist who currently spends all of my time doing
            Front End Web Development with React. I love the idea of being able
            to make statistics something everyone can use by building online
            tools and tutorials. <br /> <br /> My personal interests include
            hiking, floating down rivers, and pretending to be a wildlife
            photographer.
          </Typography>
          <Box sx={{ display: "flex" }}>
            <IconButton
              aria-label="linkedin"
              href="https://www.linkedin.com/in/alyssa-butler-b77054ab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              aria-label="github"
              href="https://github.com/cabutler10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              aria-label="instagram"
              href="https://www.instagram.com/cabutler10/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </div>
      </Box>
      <Box
        sx={{
          flexBasis: { xs: "100%", sm: "30%", md: "50%" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", md: "60%" },
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <StaticImage
            src="../../images/author.jpg"
            alt="computer"
            placeholder="rgba(255,255,255,0)"
          />
        </Box>
      </Box>
    </Container>
  </Box>
)

export default About
