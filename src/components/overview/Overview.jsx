import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Box, Container, Typography } from "@mui/material"

const Overview = () => (
  <Box
    sx={{
      background: theme => theme.palette.secondary.light,
      py: { xs: 6, md: 12 },
    }}
  >
    <Typography variant="subtitle1" align="center" sx={{ pb: 6 }}>
      Interests
    </Typography>
    <Container sx={{ display: "flex", alignItems: "center" }}>
      <Box
        sx={{
          flexBasis: { xs: "100%", sm: "30%", md: "50%" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: { xs: "90%", md: "60%" } }}>
          <StaticImage
            src="../../images/interests1.jpg"
            alt="computer"
            placeholder="rgba(255,255,255,0)"
          />
        </Box>
      </Box>
      <Box sx={{ flexBasis: { xs: "100%", sm: "70%", md: "50%" } }}>
        <Typography sx={{ mb: 6 }}>
          I am a Data Scientist with a strong interest in Web Development. I am
          fascinated with the idea of being able to make data driven decision
          making something everyone can use and understand by building online
          and mobile tools, charts, and tutorials.
        </Typography>
        <Typography>
          I am a strong believer that data analyses shouldn't be hard to do or
          to understand. What good is data analysis if it sits buried in lengthy
          articles that don't get read? What I love about Web Development is
          that is provides an opportunity for data analyses to be something
          everyone can use.
        </Typography>
      </Box>
    </Container>
  </Box>
)

export default Overview
