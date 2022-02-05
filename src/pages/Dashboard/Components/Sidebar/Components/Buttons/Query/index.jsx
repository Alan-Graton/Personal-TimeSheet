import React from 'react';

// Components
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

import { Paper, Table, TableContainer } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    tableContainer: {
        marginTop: 70,
        borderRadius: 15,
        margin: "10px 270px",
        maxWidth: 950
    },
    tableRoot: {
        minWidth: 650
    }
});

function Query() {
    const classes = useStyles();
    return(
        <TableContainer  className={classes.tableContainer} component={Paper} >
            <Table className={classes.tableRoot} >
                <Header />
                <Body />
                <Footer />
            </Table>
        </TableContainer>
    );
}

export default Query;