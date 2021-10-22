import { initializeApp } from "firebase/app";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Editor from "./Editor";
import Experience from "./Experience";

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "projectId.firebaseapp.com",
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: "https://databaseName.firebaseio.com",
  storageBucket: "bucket.appspot.com",
};

export const fb = initializeApp(firebaseConfig);

// Get a reference to the database service

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/editor">
            <Editor />
          </Route>
          <Route path="/experiences/:experienceKey">
            <Experience />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
