import React from "react";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import UploadImage from "./UploadImage";
import ForgotPassword from "./ForgotPassword";
import ChangePassword from "./ChangePassword";
import PrivateRoute from "./../PrivateRoute";
import { Switch, Route } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import NotFound from "./../NotFound";

const Forms = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/create/profileform" component={ProfileForm} />
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
      <PrivateRoute exact path="/create/uploadimage" component={UploadImage} />
      <Route exact path="/create/changepassword" component={ChangePassword} />
      <Route exact path="/create/forgotpassword" component={ForgotPassword} />
      <Route render={(props) => <NotFound fromDashboard={true} {...props} />} />
    </Switch>
  );
};

export default Forms;
