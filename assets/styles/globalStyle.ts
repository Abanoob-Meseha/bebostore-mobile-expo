import { StyleSheet } from "react-native";
import colors from "../colors/colors";

const globalStyle = StyleSheet.create({
    title:{
        fontSize: 50 ,
        fontWeight: "bold",
        color: colors.primary,
        marginVertical: 20
    },
    description:{
        fontSize: 20,
        textAlign:"center"
    },
    form:{
        display: "flex",
        width:"90%",
        gap:20 ,
        marginTop: 20,
        marginHorizontal: "auto"
    }
})

export default globalStyle ;