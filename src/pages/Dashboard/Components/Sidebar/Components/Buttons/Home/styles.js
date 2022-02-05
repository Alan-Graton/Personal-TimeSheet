import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        placeItems: "center",
    },
    card: {
        width: "350px",
        height: "350px",
        padding: "30px 20px",
        borderRadius: 15,
        marginTop: "70px",
        display: "grid",
        placeItems: "center"
    },
    cardContent: {
        display: "grid",
        placeItems: "center",
    },
    // profilePic: { // ORIGINAL
    //     borderRadius: 20,
    //     maxWidth: 200,
    // },
    bugsBunny: {
        borderRadius: 20,
        maxWidth: 250,
    },
    userData: {
        display: "grid",
        placeItems: "center",
    }
}));

export default useStyles;