import * as React from "react"
import { Box, ButtonBase, Container, Typography } from "@mui/material"
import img1 from "../../images/er.png"
import img2 from "../../images/eveema.png"

function Highlights() {
  const projects = [
    {
      image: img1,
      link: "https://eisbach-riders.com/",
      alt: "Eisbach Riders website",
    },
    {
      image: img2,
      link: "https://www.eveema.live/",
      alt: "Eveema website",
    },
  ]
  return (
    <Box
      sx={{
        background: theme => theme.palette.secondary.light,
        py: { xs: 6, md: 12 },
      }}
    >
      <Typography variant="subtitle1" align="center" sx={{ pb: 1 }}>
        Highlighted Projects
      </Typography>
      <Typography
        variant="subtitle2"
        align="center"
        sx={{ pb: 6, fontSize: 16 }}
      >
        Please check out my{" "}
        <Box
          href="https://github.com/cabutler10"
          target="_blank"
          rel="noopener noreferrer"
          component="a"
          sx={{ color: theme => theme.palette.text.primary }}
        >
          github repository
        </Box>{" "}
        for a comprehensive view of my work.
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {projects.map(elem => (
          <Box sx={{ flexBasis: { xs: "100%", md: "47%" } }}>
            <ButtonBase
              href={elem.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ width: "100%", height: "100%" }}
              ariaLabel={elem.alt}
            >
              <Box
                component="img"
                src={elem.image}
                alt={elm.alt}
                sx={{ width: "100%", height: "100%" }}
              />
            </ButtonBase>
          </Box>
        ))}
      </Container>
    </Box>
  )
}

export default Highlights
