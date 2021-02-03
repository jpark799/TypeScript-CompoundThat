import { Container, Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { Inputs, Chart, Title } from "./views/components";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(4),
    marginBottom: theme.spacing(3),
    maxWidth: "1000"
  }
  
}));


function App() {
  const classes = useStyles();

	return (
		<div>
      				<Title />

			<Container className={classes.container}>

				<Chart />
				<Grid container spacing={2}>
					<Grid item xs={2}></Grid>
					<Grid item xs={4}>
						<Inputs title="Initial Deposit"/>
            <Inputs title="Contributions"/>
						<Inputs title="Estimated Rate of Return"/>

					</Grid>
					<Grid item xs={4}>
						<Inputs title="Investment Timespan" />
            <Inputs title="Contribution Frequency" />
            <Inputs title="Compound Frequency" />
					</Grid>
					<Grid item xs={2}></Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default App;
