const classes = () => ({
    input: {
        display:'flex',
        flexDirection: 'column',
        textAlign: 'right',
        marginTop: 20,
        marginBottom: 20,
    },
    label: {
        marginBottom: 10,
    },
    text: {
        textAlign: "right",
        "&::placeholder": {
            textAlign: "right",
        },
    }
});

export default classes;