import React from 'react';

import { makeStyles } from "@material-ui/core/styles";

import { Paper, TableFooter, TablePagination } from "@material-ui/core";

const useStyles = makeStyles({

})

function Footer() {
    const classes = useStyles();
    return(
        <TableFooter>
            <TablePagination />
        </TableFooter>
    );
}

export default Footer;