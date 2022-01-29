import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const Button = ({
  title,
  style,
  onPress
}) => {
  return (
    <TouchableOpacity style={[style]} onPress={onPress}>
      {title && <Text>{title}</Text>}
    </TouchableOpacity>
  )
}

export default Button