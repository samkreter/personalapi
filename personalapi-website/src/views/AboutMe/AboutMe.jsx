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
            description="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
          />
        </ItemGrid>
      </Grid>
    </div>
  );
}

export default AboutMe;
