import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Paper,
  ThemeProvider,
  createMuiTheme,
  Switch,
} from "@material-ui/core";
import { dark, light } from "@material-ui/core/styles/createPalette";
import { blue, green } from "@material-ui/core/colors";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  const lightTheme = createMuiTheme({
    palette: {
      primary: blue,
      secondary: green,
    },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Paper style={{ height: "100vh" }}>
        <Grid container direction="column">
          <Typography variant="h1">Dark Mode App!</Typography>
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          ></Switch>
          <Button variant="contained" color="primary">
            This is a button
          </Button>
          <Button variant="contained" color="secondary">
            This is another button
          </Button>

        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
