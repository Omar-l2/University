const classes = (buttonColor) => ({
    box: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: 20,
        paddingLeft: 100,
    },
    row: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    option: {
        width: 250,
        height: 50,
        display: 'flex',
        justifyContent: 'flex-end',
        textAlign: 'left',
        alignItems: 'center',
        border: '1 solid black',
        boxShadow: 3,
        padding: 1,
    },
    optionInput: {
        textAlign: "right",
        "&::placeholder": {
            textAlign: "right",
        },
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    button: {
        width: 300,
        height: 60,
        color: 'white',
        backgroundColor: buttonColor,
        fontSize: 22,
        borderRadius: 5,
        fontWeight: 700,
    },

});

export default classes;