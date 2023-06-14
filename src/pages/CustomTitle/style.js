import colors from "../../Constants/colors";

const classes = (bgColor) => ({
    box: {
        backgroundColor: bgColor,
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
    },
    standard: {
        backgroundColor: bgColor,
    },
    line: {
        flex: 1, 
        height: '0.5px', 
        backgroundColor: colors.ivory,
    },
    title: {
        width: '15%',
        textAlign: 'center',
        color: 'white'
    },
    tilteStandard: {
        color: 'white'
    },
});

export default classes;