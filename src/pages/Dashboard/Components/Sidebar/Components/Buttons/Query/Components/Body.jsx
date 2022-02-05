import React from 'react';

import Cells from "./Cells";

import { TableBody, TableRow } from "@material-ui/core";

function Body() {
    return(
        <TableBody>
            <TableRow>
                <Cells />
            </TableRow>
        </TableBody>
    );
}

export default Body;