import React from "react";
import Sidenavbar from "../component/Sidenavbar";
import StorefrontIcon from "@mui/icons-material/Storefront";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import AccordionDash from "../component/AccordionDash";
import BarChart from "../Charts/BarChart";

function Settings() {
  return (
    <Box
      sx={{
        display: "flex",
        background: "rgb(169 154 159 / 45%)",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Sidenavbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 10 }}>
        <Typography
          sx={{
            fontStyle: "italic",
            fontWeight: "bold",
            fontSize: "30px",
            color: "rgb(96 34 99)",
          }}
        >
          SETTINGS
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack direction={"row"} spacing={3}>
                <Card
                  sx={{
                    maxWidth: 445,
                    background:
                      "linear-gradient(90.9deg, rgb(96 34 99 / 42%) 0.3%, rgb(96 34 99 / 83%) 87.8%)",
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
                <Card
                  sx={{
                    maxWidth: 445,
                    background:
                      "linear-gradient(90.9deg, rgb(3, 195, 195) 0.3%, rgb(37, 84, 112) 87.8%)",
                    marginLeft: "3px",
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={1}>
                <Card
                  sx={{
                    maxWidth: 445,
                    background:
                      "linear-gradient(90.9deg, rgb(96 34 99 / 42%) 0.3%, rgb(96 34 99 / 83%) 87.8%)",
                    color: "white",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 3,
                    padding: 1,
                  }}
                >
                  <Typography sx={{ paddingTop: 1 }}>
                    <StorefrontIcon sx={{ fontSize: "30px" }} />
                  </Typography>
                  <Typography sx={{ fontSize: "25px" }}>
                    $237k
                    <Typography>Total Income</Typography>
                  </Typography>

                  <CardActions></CardActions>
                </Card>
                <Card
                  sx={{
                    maxWidth: 445,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 4,
                    background:
                      "linear-gradient(90.9deg, rgb(96 34 99 / 42%) 0.3%, rgb(96 34 99 / 83%) 87.8%)",
                    color: "white",
                    padding: 1.8,
                  }}
                >
                  <Typography sx={{ paddingTop: 1 }}>
                    <StorefrontIcon sx={{ fontSize: "30px" }} />
                  </Typography>
                  <Typography sx={{ fontSize: "25px" }}>
                    $5637k
                    <Typography>Total Income</Typography>
                  </Typography>

                  <CardActions></CardActions>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ marginTop: "20px" }}>
            <Grid item xs={8}>
              <Card sx={{ width :'100%', height: "48vh"  , padding :2 , overflow :'auto'}}>
                <BarChart />
              </Card>{" "}
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 445, height: "48vh", overflow: "auto" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <Typography
                      sx={{ fontSize: "25px", fontWeight: "bold", padding: 2 }}
                    >
                      Popular Products
                    </Typography>
                    <AccordionDash />
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Settings;
