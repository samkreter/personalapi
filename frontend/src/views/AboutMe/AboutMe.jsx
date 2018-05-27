import React from "react";
import { Grid, InputLabel } from "material-ui";

import {
  AboutMeCard,
  ItemGrid
} from "components";

import avatar from "assets/img/profilePicture.jpg";

var classes = {
  cardAvatar: {
    maxWidth: "230px",
    maxHeight: "230px",
  }
}


function AboutMe({ ...props }) {
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <AboutMeCard
            classes={classes}
            avatar={avatar}
            subtitle="Software Engineer"
            title="Sam Kreter"
            description="I am passionate person who loves learning. I am currently working for Microsoft working on Azure Container Instances and Azure CloudShell."
          />
        </ItemGrid>
      </Grid>
    </div>
  );
}

export default AboutMe;
