import { makeStyles, withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export const useStyles = makeStyles({
  table: {
    alignContent: "center",
    fontFamily: "basefont-regular",
  },
});

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontFamily: "basefont-regular",
    fontSize: 16
  },
  body: {
    fontSize: 15,
    fontFamily: "basefont-regular",
  },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
