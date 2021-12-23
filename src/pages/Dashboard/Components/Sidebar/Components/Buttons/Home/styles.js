import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        placeItems: "center",
    },
    card: {
        width: "345px",
        height: "350px",
        padding: "30px 20px",
        borderRadius: 15,
    },
    cardContent: {
        display: "grid",
        placeItems: "center",
    },
}));

export default useStyles;