import React from "react";
import { Grid, Typography, Button, Paper } from "@material-ui/core";

function App() {
  return (
    <Paper style={{ height: "100vh" }}>
      <Grid container direction="column">
        <Typography variant="h1">This is my App!</Typography>
        <Button variant="contained" color="primary">
          This is a button
        </Button>
        <Button variant="contained" color="secondary">
          This is another button 
        </Button>
      </Grid>
    </Paper>
  );
}

export default App;
