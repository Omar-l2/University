const classes = (bgColor, iconColor) => ({
    container: {
        backgroundColor: bgColor,
        padding: 2,
        margin: 15,
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    icon: {
        backgroundColor: iconColor,
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    image: {
        padding: 10,
        height: 'auto',
    },
    imageContainer: {
        display: 'flex',
        flexGrow: 1,
    }
});

export default classes;