import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    tableRow: {
        marginTop: 20,
    },
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
    selectCreateProject: {
        borderRadius: 5,
        color: "white",
        height: 40,
        marginTop: 20,
        background: "linear-gradient(45deg, #11aebf 30%, #0ddbae 90%)",
        "&:hover": {
            background: "linear-gradient(45deg, #0a7694 30%, #0a3a94 90%)",
            boxShadow: "0 3px 5px 2px rgba(28, 133, 12, .3)",
        },
    },
    createNewProject: {
        borderRadius: 5,
        color: "white",
        height: 40,
        marginTop: 20,
        background: "linear-gradient(45deg, #0cc72b 30%, #0cc779 90%)",
        "&:hover": {
            background: "linear-gradient(45deg, #c1c70c 30%, #d0d4a5 90%)",
            boxShadow: "0 3px 5px 2px rgba(28, 133, 12, .3)",
        },
    },
    componenteLabels: {
        color: "#989c9c",
    },
    newProjectdiv: {
        display: "grid",
        placeItems: "center"
    },
    styledMenuDiv: {
        display: "grid",
        placeItems: "center",
    }
}))

export default useStyles;