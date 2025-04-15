import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import colors from '@/assets/colors/colors'
import LatoText from './LatoText'

interface buttonProps {
    children : ReactNode
    type: "primary" | "secondery",
    onPress: ()=> void,
    icon?: ReactNode ,
    style?: StyleProp<ViewStyle>
}
const Button = ({children , type , icon , onPress , style} : buttonProps) => {
  return (
    <Pressable style={[styles.btnContainer , type == "primary"? styles.primary : styles.secondary , style]} onPress={onPress}>
      <LatoText style={[styles.text , type == "primary" ? styles.primaryText : styles.secondaryText]}>{children}</LatoText>
      {icon}
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    btnContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
        borderRadius: 30 ,
        elevation: 10 ,
        paddingHorizontal: 35 ,
        paddingVertical: 20,
    },
    primary:{
        backgroundColor: colors.primary,
    },
    secondary:{
        borderColor : colors.primary ,
        borderWidth: 1 ,
        backgroundColor: "white"
    },
    text:{
        fontSize: 20 ,
        fontFamily: "Inter"
    },
    primaryText:{
        color: "white"
    },
    secondaryText:{
        color: colors.primary
    }
})