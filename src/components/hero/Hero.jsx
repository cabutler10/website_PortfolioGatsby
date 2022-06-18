import * as React from "react"
import { Box, Container, Typography, Button, Divider } from "@mui/material"
import backgroundImage from "../../images/background.jpg"
import pdf from "../../images/Resume_AlyssaButler.pdf"

const Hero = () => (
  <Container>
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        height: "90vH",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: 20,
            letterSpacing: 2,
            color: theme => theme.palette.primary.main,
          }}
        >
          hello, i am
        </Typography>
        <Typography
          component="h1"
          sx={{
            fontSize: 48,
            fontWeight: 700,
            letterSpacing: 2,
            color: theme => theme.palette.primary.main,
          }}
        >
          Alyssa Butler
        </Typography>
        <Typography
          component="h2"
          sx={{
            fontSize: 20,
            letterSpacing: 2,
            color: theme => theme.palette.primary.main,
          }}
        >
          Data Scientist & Frontend Web Developer
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ pt: 2 }}>
          <Button
            size="large"
            color="primary"
            variant="contained"
            sx={{ mr: 2 }}
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </Button>
          <Button
            size="large"
            variant="contained"
            href="https://www.linkedin.com/in/alyssa-butler-b77054ab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </Button>
        </Box>
      </Box>
    </Box>
  </Container>
)

export default Hero
