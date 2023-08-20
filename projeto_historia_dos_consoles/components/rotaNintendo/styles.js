import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171C26',
        paddingTop: 10,
    },

    tarja: {
        height: 60,
        backgroundColor: '#3E4459',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        opacity: 0.6,
        marginBottom: 10,
    },

    textTarja: {
        fontSize: 25,
        fontStyle: 'italic',
        fontWeight: '600',
        color: 'white',
        textShadowColor: 'white',
        textShadowRadius: 1,
    },

    img: {
        width: 360,
        height: 250,
        alignSelf: 'center',
        borderRadius: 30,
    },

    card: {
        backgroundColor: '#676673',
        opacity: 0.6,
        margin: 20,
        borderRadius: 20,
        shadowColor: 'black',
        shadowRadius: 2,
        padding: 10,
    },

    texto: {
        fontSize: 17,
        color: 'white',
        textShadowRadius: 1,
        textShadowColor: 'white',
        textAlign: 'justify',
    },

    containerCard: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    cardEspecif: {
        width: 140,
        height: 140,
        backgroundColor: '#9494A6',
        margin: 20,
        borderRadius: 20,
        alignItems: 'center',
        padding: 10,
        opacity: 0.5,
        borderColor: '#3E4459',
        borderWidth: 2,
    },
    
    textoEspecif: {
        fontSize: 17,
        color: 'white',
        textAlign: 'center',
        textShadowColor: 'white',
        textShadowRadius: 1,
    },

    icon: {
        width: 60,
        height: 60,
        marginBottom: 10,
    },


});


export default styles;
