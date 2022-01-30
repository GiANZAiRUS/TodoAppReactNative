import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const Button = ({
  title,
  style,
  onPress
}) => {
  return (
    <TouchableOpacity style={[style]} onPress={onPress}>
      {title && <Text style={{ color: 'black' }}>{title}</Text>}
    </TouchableOpacity>
  )
}

export default Button