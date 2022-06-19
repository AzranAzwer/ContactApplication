import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    textContainer: {
        marginVertical: 10
    },
    emptyError: {
        marginVertical: 5,
        color: 'red'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonStyle: {
        height: 70,
        backgroundColor: 'lightblue',
        width: 130, alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 20,
        borderColor: 'Blue',
        borderWidth: 1
    }
});
