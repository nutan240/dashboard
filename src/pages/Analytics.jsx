import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  CardActions,
} from "@mui/material";
import React from "react";
import GeoChart from "../Charts/GeoChart";
import PieChart from "../Charts/PieChart";
import TradingViewChart from "../Charts/TradingViewChart";

function Analytics() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Box sx={{ width: "100%" }}>
            <Grid container spacing={1} sx={{ width: "100%" }}>
              <Grid item sx={{ width: "100%" }}>
                <Stack
                  sx={{
                    flexDirection: {
                      xs: "column",
                      lg: "row",
                    },
                    alignItems: "flex-end",
                    gap: 2,
                    marginTop: { lg: "0px ", sm: "18px" },
                  }}
                  spacing={3}
                >
                  <Card
                    sx={{
                      width: { lg: 445, sm: "100%" },
                      height: "137px",
                      background:
                        "linear-gradient(90.9deg, rgb(96 34 99 / 42%) 0.3%, rgb(96 34 99 / 83%) 87.8%)",
                      color: "white",
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Visitor
                      </Typography>
                      <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
                        24,630
                      </Typography>
                      <Typography
                        sx={{ color: "white" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        Since last week
                      </Typography>
                    </CardContent>
                    <CardActions></CardActions>
                  </Card>
                  <Card
                    sx={{
                      width: { lg: 445, sm: "100%" },
                      background:
                        "linear-gradient(90.9deg, rgb(3, 195, 195) 0.3%, rgb(37, 84, 112) 87.8%)",
                      marginLeft: "3px",
                      color: "white",
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Visitor
                      </Typography>
                      <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
                        24,630
                      </Typography>
                      <Typography
                        sx={{ color: "white" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        Since last week
                      </Typography>
                    </CardContent>
                    <CardActions></CardActions>
                  </Card>
                </Stack>
              </Grid>
            </Grid>

            <Grid container spacing={1} sx={{}}>
              <Grid item sx={{ width: "100%" }}>
                <Stack
                  sx={{
                    flexDirection: {
                      xs: "column",
                      lg: "row",
                    },
                    alignItems: "flex-end",
                    gap: 2,
                    marginTop: { lg: "0px ", sm: "18px" },
                  }}
                  spacing={3}
                >
                  <Card
                    sx={{
                      width: { lg: 445, sm: "100%" },
                      height: "137px",
                      background:
                        "linear-gradient(90.9deg, rgb(96 34 99 / 42%) 0.3%, rgb(96 34 99 / 83%) 87.8%)",
                      color: "white",
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Visitor
                      </Typography>
                      <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
                        24,630
                      </Typography>
                      <Typography
                        sx={{ color: "white" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        Since last week
                      </Typography>
                    </CardContent>
                    <CardActions></CardActions>
                  </Card>
                  <Card
                    sx={{
                      width: { lg: 445, sm: "100%" },
                      background:
                        "linear-gradient(90.9deg, rgb(3, 195, 195) 0.3%, rgb(37, 84, 112) 87.8%)",
                      marginLeft: "3px",
                      color: "white",
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Visitor
                      </Typography>
                      <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
                        24,630
                      </Typography>
                      <Typography
                        sx={{ color: "white" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        Since last week
                      </Typography>
                    </CardContent>
                    <CardActions></CardActions>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
          </Box>
          <Grid sx={{ width: { lg: "100%", sm: "50%" } }}>
            <Stack spacing={1} sx={{ marginTop: "20px" }}>
              <Card
                sx={{
                  //   width: "100%",
                  background:
                    "linear-gradient(90.9deg, rgb(96 34 99 / 42%) 0.3%, rgb(96 34 99 / 83%) 87.8%)",
                  color: "white",
                  display: "flex",
                  alignItems: "flex-start",
                  padding: 0.3,
                  height: "314px",
                }}
              >
                <PieChart />
                {/* <Typography sx={{ paddingTop: 1 }}></Typography>
                <Typography sx={{ fontSize: "25px" }}>
                  $237k
                  <Typography>Total Income</Typography>
                </Typography> */}
              </Card>
            </Stack>
          </Grid>
        </Box>

        <Grid container spacing={1} sx={{ paddingY: 2 }}>
          <Grid item  sx={{ padding: 2 }}>
            <Card
              sx={{
             
                width: "880px",

                height: "47vh",
                padding: 2,
                overflow: "auto",

                boxShadow: 3,
              }}
            >
              <GeoChart />
            </Card>{" "}
          </Grid>
          <Grid item xs={4} sx={{ width: "100%" }}>
            <Card
              sx={{
                width: "560px",
                height: "52vh",
                overflow: "auto",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                <Typography
                  sx={{ fontSize: "25px", fontWeight: "bold", padding: 2 }}
                >
                  Popular Products
                </Typography>
                <TradingViewChart/>
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Analytics;
