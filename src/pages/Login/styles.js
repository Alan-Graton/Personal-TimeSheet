import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "grid",
    placeItems: "center",
    padding: "30px 20px",
  },
  card: {
    width: 400,
    height: 400,
    borderRadius: 15,
  },
  cardHeaderTitle: {
    display: "grid",
    placeItems: "center",
    marginBottom: "20px"
  },
  cardSubHeaderBtns: {
    display: "grid",
    placeItems: "center",
    marginTop: "-40px"
  },
  gmailAccount: {
    cursor: "pointer",
  },
});

export default useStyles;
