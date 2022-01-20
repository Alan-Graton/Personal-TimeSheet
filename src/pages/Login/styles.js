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
    borderRadius: 25,
  },
  cardHeaderTitle: {
    display: "grid",
    placeItems: "center",
  },
  cardSubHeaderBtns: {
    display: "grid",
    placeItems: "center",
  },
  BtnEmailAccount: {
    borderRadius: 5,
    color: "white",
    height: 40,
    marginTop: 20,
    background: "linear-gradient(45deg, #e3451e 30%, #9c9076 90%)",
    "&:hover": {
      background: "linear-gradient(45deg, #61ba0b 30%, #7bf20c 90%)",
      boxShadow: "0 3px 5px 2px rgba(28, 133, 12, .3)",
    },
  },
  BtnNoAccount: {
    borderRadius: 5,
    color: "white",
    height: 40,
    marginTop: 20,
    background: "linear-gradient(45deg, #13abab 30%, #439494 90%)",
    "&:hover": {
      background: "linear-gradient(45deg, #61ba0b 30%, #7bf20c 90%)",
      boxShadow: "0 3px 5px 2px rgba(28, 133, 12, .3)",
    },
  }
});

export default useStyles;
