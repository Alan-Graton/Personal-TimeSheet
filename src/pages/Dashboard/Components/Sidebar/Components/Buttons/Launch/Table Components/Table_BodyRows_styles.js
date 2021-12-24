import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    dateInput: {
        cursor: "pointer",
        textColor: "white",
        width: "90%",
        padding: 10,
        border: "none",
        borderRadius: 50,
        outline: "none",
        fontSize: 17,
        background: "linear-gradient(45deg, #61ba0b 30%, #7bf20c 90%)",
        color: theme.palette.getContrastText(theme.palette.primary.light),
    },
    addProject: {
        borderRadius: 5,
        color: "white",
        height: 40,
        marginTop: 20,
        background: "linear-gradient(45deg, #f29f05 30%, #ed6f00 90%)",
        "&:hover": {
        background: "linear-gradient(45deg, #61ba0b 30%, #7bf20c 90%)",
        boxShadow: "0 3px 5px 2px rgba(28, 133, 12, .3)",
        },
    },
    componenteLabels: {
        color: "#989c9c",
    }
}))

export default useStyles;