import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    grow: {
        flexGrow: 1,
    },
    useSection: {
        display: "flex",
        alignItems: "center",
    },
    avatar: {
        cursor: "pointer",
        marginLeft: 5,
    },
});

export default useStyles;