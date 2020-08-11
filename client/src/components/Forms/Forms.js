import React from "react";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import UploadImage from "./UploadImage";

import { Route, Switch } from "react-router-dom";
import ProfileForm from "./ProfileForm";
const Forms = () => {
  return (
    <div className="padding-top">
      <Switch>
        <Route exact path="/create/profileform" component={ProfileForm} />
        <Route exact path="/create/educationform" component={EducationForm} />
        <Route exact path="/create/experienceform" component={ExperienceForm} />
        <Route exact path="/create/uploadimage" component={UploadImage} />
      </Switch>
    </div>
  );
};

export default Forms;
