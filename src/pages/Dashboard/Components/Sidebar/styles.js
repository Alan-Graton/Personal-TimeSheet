import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        width: "35%",
        maxWidth: 215,
        minWidth: 215,
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        height: "100vh",
        left: 1,
        top: 64,
    },
    buttons: {
        boderRadius: 5,
        boder: 0,
        color: "#989c9c",
        width: "100%",
        height: 40,
        marginTop: "10%",
        "&:hover": {
            color: "white",
            background: "linear-gradient(45deg, #088a54 30%, #1bab6f 90%)",
            boxShadow: "0 3px 5px 2px rgba(28, 133, 12, .3)"
        }
    },
});

export default useStyles;