import colors from "../../Constants/colors";
import { courseStatus } from "../../Constants/constants";

const classes = (status) => ({
    container: {
        display: 'flex',
        backgroundColor: colors.testLight,
        padding: 6,
        margin: 18,
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        justifyContent: 'flex-end'
    },
    text: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        fontWeight: 'bold',
    },
    image: {
        maxWidth: '75%',
        height: 'auto',
    },
    statusbox: {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    iconImage: {
        width: '3%',
        marginLeft: 10,
        height: 'auto'
    },
    status: {
        color: status === courseStatus.completed ? colors.completedStatus : colors.uncompleted
    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5,

    },
    lock : {
        display:'flex',
        justifyContent: 'flex-start',
        marginLeft: 25,
        marginBottom: 25,
    },
    lockImage: {
        width: '5%',
        height: 'auto'
    }
})

export default classes;