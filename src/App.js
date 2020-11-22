import React, {useState} from "react";
import {
  Grid,
  Typography,
  Button,
  Paper,
  ThemeProvider,
  createMuiTheme,
  Switch,
} from "@material-ui/core";
import { dark } from "@material-ui/core/styles/createPalette";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <Grid container direction="column">
          <Typography variant="h1">This is my App!</Typography>
          <Button variant="contained" color = "primary">This is a button</Button>
          <Button variant="contained" color="secondary">
            This is another button
          </Button>
          <Switch checked={darkMode} onChange={()=> setDarkMode(!darkMode)}>

          </Switch>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
