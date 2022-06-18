import * as React from "react"
import {
  Box,
  Container,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material"
import BulletIcon from "@mui/icons-material/Stop"
import CodeIcon from "@mui/icons-material/Code"
import ChartIcon from "@mui/icons-material/BarChart"
import ToolIcon from "@mui/icons-material/Palette"

function Expertise() {
  const data = [
    {
      icon: <CodeIcon />,
      title: "Languages",
      points: ["Javascript", "GraphQL", "Python", "R"],
    },
    {
      icon: <ToolIcon />,
      title: "Development",
      points: [
        "React",
        "Gatsby",
        "Wordpress",
        "Material-UI",
        "i18next",
        "google maps",
        "a11y",
      ],
    },
    {
      icon: <ChartIcon />,
      title: "Charting",
      points: ["Highcharts", "ggplot2", "recharts", "apexcharts", "Shiny"],
    },
  ]
  const progress = [
    { text: "statistics", value: 79 },
    { text: "web engineering", value: 95 },
    { text: "UX / accessibility", value: 55 },
    { text: "lecturing", value: 62 },
    { text: "management", value: 85 },
  ]

  return (
    <Box
      sx={{
        py: { xs: 6, md: 12 },
      }}
    >
      <Typography variant="subtitle1" align="center" sx={{ pb: 4 }}>
        Expertise
      </Typography>
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        <>
          {data.map(elem => (
            <Box sx={{ flexBasis: { xs: "100%", sm: "20%" } }}>
              <Box sx={{ display: "flex", pb: 1 }}>
                {elem.icon}
                <Typography sx={{ pl: 2 }}>{elem.title}</Typography>
              </Box>
              <List>
                {elem.points.map(item => (
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <BulletIcon
                        sx={{
                          color: theme => theme.palette.primary.main,
                          width: 12,
                          height: 12,
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </>
        <Box
          sx={{
            flexBasis: { xs: "100%", md: "40%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {progress.map(elem => (
            <React.Fragment key={elem.text}>
              <Typography>{elem.text}</Typography>
              <LinearProgress
                variant="determinate"
                color="primary"
                value={elem.value}
              />
            </React.Fragment>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Expertise
