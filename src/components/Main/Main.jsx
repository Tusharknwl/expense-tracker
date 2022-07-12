import React, { useContext } from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles';
import Form from './Form/Form'
import List from './List/List'

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root}>
        <CardHeader title="Kharcha" subheader="Expense Tracker" />
        <CardContent>
        <Typography align="center" variant="h5">Total Balance ₹{balance}</Typography>
            <Typography align="center"  variant="subtitle2" styles={{lineHeight: "1.5em", marginTop: "20px"}}>
                Try saying: Add income for ₹100 in Category Salary for Monday
            </Typography>
            <Divider />
            <Form />
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  );
}

export default Main
