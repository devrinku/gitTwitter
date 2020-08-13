import React from "react";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import UploadImage from "./UploadImage";
import ChangePassword from "./ChangePassword";
import PrivateRoute from "./../PrivateRoute";
import { Switch, Route } from "react-router-dom";
import ProfileForm from "./ProfileForm";
const Forms = () => {
  return (
    <div className="padding-top">
      <Switch>
        <PrivateRoute
          exact
          path="/create/profileform"
          component={ProfileForm}
        />
        <PrivateRoute
          exact
          path="/create/educationform"
          component={EducationForm}
        />
        <PrivateRoute
          exact
          path="/create/experienceform"
          component={ExperienceForm}
        />
        <PrivateRoute
          exact
          path="/create/uploadimage"
          component={UploadImage}
        />
        <Route exact path="/create/changepassword" component={ChangePassword} />
      </Switch>
    </div>
  );
};

export default Forms;
