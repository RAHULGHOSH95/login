import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from './assets/webGraphic.png';
import IconButton from '@material-ui/core/IconButton';



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: "url(./assets/webGraphic.png)", 
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(6, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
     <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          
          <Typography component="h1" variant="h5">
            Create An Account
          </Typography>
          <form className={classes.form} noValidate>

            <Grid container alignItems="flex-start" spacing={2}>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="First name"
                  label="First-Name"
                  type="name"
                  id="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="Last name"
                  label="Last-Name"
                  type="name"
                  id="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="Age"
                  label="Age"
                  type="age"
                  id="age"
                  autoComplete="age"
                />
              </Grid>
            </Grid>

            <Grid container alignItems="flex-start" spacing={2}>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="Mobile Number"
                  label="Mobile Number"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="Email"
                  label="Email"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                multiline
                rows={4}
                name="Description"
                label="Description"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid container alignItems="flex-start" spacing={2}>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="Password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={6}>
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="Password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Grid container alignItems="center"  spacing={6}>
              <Grid item xs={4}>
                <Button
                  variant="outlined"
                  type="submit"
                  fullWidth
                  color="primary"
                className={classes.submit}
                >
                  Reset
            </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Submit
            </Button>
              </Grid>
            </Grid>

          </form>
        </div>
      </Grid>
    </Grid>
  );
}