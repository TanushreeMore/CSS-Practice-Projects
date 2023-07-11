import {
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Grid>
        <Card style={{ margin: "auto" }}>
          <CardContent>
            <Grid>
              <Typography variant="h5" style={{ textAlign: "center" }}>
                Welcome to CSS Dashboard!!
              </Typography>
            </Grid>
            <br />

            <Grid
              container
              justifyContent="center"
              rowSpacing={{ xs: 3, sm: 3, md: 3 }}
              columnSpacing={{ xs: 3, sm: 10, md: 3 }}
            >
              <Grid item xs={8} sm={6}>
                <Link
                  to="/loading"
                  style={{ textDecoration: "none", textAlign: "center" }}
                >
                  <Card sx={{ minHeight: 175 }}>
                    <Typography variant="h4">Loading</Typography>
                  </Card>
                </Link>
              </Grid>

              <Grid item xs={8} sm={6}>
                <Link
                  to="/text_center"
                  style={{ textDecoration: "none", textAlign: "center" }}
                >
                  <Card sx={{ minHeight: 175 }}>
                    <Typography variant="h4">TextCenter</Typography>
                  </Card>
                </Link>
              </Grid>

              <Grid item xs={8} sm={6}>
                <Link
                  to="/equal_size_column"
                  style={{ textDecoration: "none", textAlign: "center" }}
                >
                  <Card sx={{ minHeight: 175 }}>
                    <Typography variant="h4">EqualSizeColumn</Typography>
                  </Card>
                </Link>
              </Grid>

              <Grid item xs={8} sm={6}>
                <Link
                  to="/center_text_horizontal_and_vertical"
                  style={{ textDecoration: "none", textAlign: "center" }}
                >
                  <Card sx={{ minHeight: 175 }}>
                    <Typography variant="h4">
                      CenterTextHorizontalAndVertical
                    </Typography>
                  </Card>
                </Link>
              </Grid>

              <Grid item xs={8} sm={6}>
                <Link
                  to="/spin_text_on_mouse_hover"
                  style={{ textDecoration: "none", textAlign: "center" }}
                >
                  <Card sx={{ minHeight: 175 }}>
                    <Typography variant="h4">SpinTextOnMouseHover</Typography>
                  </Card>
                </Link>
              </Grid>

              <Grid item xs={8} sm={6}>
                <Link
                  to="/image_hover_effect"
                  style={{ textDecoration: "none", textAlign: "center" }}
                >
                  <Card sx={{ minHeight: 175 }}>
                    <Typography variant="h4">ImageHoverEffect</Typography>
                  </Card>
                </Link>
              </Grid>

              <Grid item xs={8} sm={6}>
                <Link
                  to="/skew_text_on_hover"
                  style={{ textDecoration: "none", textAlign: "center" }}
                >
                  <Card sx={{ minHeight: 175 }}>
                    <Typography variant="h4">SkewTextOnHover</Typography>
                  </Card>
                </Link>
              </Grid>

              <Grid item xs={8} sm={6}>
                <Link
                  to="/text_3d"
                  style={{ textDecoration: "none", textAlign: "center" }}
                >
                  <Card sx={{ minHeight: 175 }}>
                    <Typography variant="h4">Text3D</Typography>
                  </Card>
                </Link>
              </Grid>

              <Grid item xs={8} sm={6}>
                <Link
                  to="/image_hover_effect2"
                  style={{ textDecoration: "none", textAlign: "center" }}
                >
                  <Card sx={{ minHeight: 175 }}>
                    <Typography variant="h4">ImageHoverEffect2</Typography>
                  </Card>
                </Link>
              </Grid>

              <Grid item xs={8} sm={6}>
                <Link
                  to="/loading_animation"
                  style={{ textDecoration: "none", textAlign: "center" }}
                >
                  <Card sx={{ minHeight: 175 }}>
                    <Typography variant="h4">LoadingAnimation</Typography>
                  </Card>
                </Link>
              </Grid>

              <Grid item xs={8} sm={6}>
                <Link
                  to="/card_flip_animation_3d"
                  style={{ textDecoration: "none", textAlign: "center" }}
                >
                  <Card sx={{ minHeight: 175 }}>
                    <Typography variant="h4">CardFlipAnimation3D</Typography>
                  </Card>
                </Link>
              </Grid>

              <Grid item xs={8} sm={6}>
                <Link
                  to="/jumping_3d_text"
                  style={{ textDecoration: "none", textAlign: "center" }}
                >
                  <Card sx={{ minHeight: 175 }}>
                    <Typography variant="h4">JumpingText3D</Typography>
                  </Card>
                </Link>
              </Grid>
              
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default Home;
