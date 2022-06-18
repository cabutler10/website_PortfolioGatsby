import * as React from "react"
import { Box, Container, Typography } from "@mui/material"

const Header = () => (
  <Box
    component="header"
    sx={{ background: theme => theme.palette.secondary.main, p: 4 }}
  >
    <Container>
      <Typography
        sx={{
          fontSize: 20,
          letterSpacing: 2,
          color: theme => theme.palette.primary.main,
        }}
      >
        Butler Web Development
      </Typography>
    </Container>
  </Box>
)

export default Header
