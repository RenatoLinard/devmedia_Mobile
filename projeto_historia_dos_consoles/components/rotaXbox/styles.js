import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#517354',
        paddingTop: 10,
    },

    tarja: {
        height: 60,
        backgroundColor: '#04D939',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        opacity: 0.6,
        marginBottom: 20,
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
        alignSelf: 'center'        
    },

    card: {
        backgroundColor: '#BF996B',
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
        backgroundColor: '#BF996B',
        margin: 20,
        borderRadius: 20,
        alignItems: 'center',
        padding: 10,
    },
    
    textoEspecif: {
        fontSize: 17,
        color: 'white',
        textAlign: 'center',
    },

    icon: {
        width: 60,
        height: 60,
        marginBottom: 10,
    },


});


export default styles;
