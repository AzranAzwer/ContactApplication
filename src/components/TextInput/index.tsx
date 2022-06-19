import React,{ChangeEvent} from 'react';
import {
  TextInput as TextInputElement,
  View,
  KeyboardType,
  ReturnKeyType,
} from 'react-native';


interface TextInputProps {
  value: string,
  placeholder: string,
  onChangeText:any,
  returnKeyType: ReturnKeyType,
  keyboardType: KeyboardType,
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  placeholder,
  onChangeText,
  returnKeyType,
  keyboardType,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <TextInputElement
        style={{
          fontSize: 16,
          borderRadius: 20,
          borderWidth: 1,
          width: '100%',
          height: 56,
          paddingLeft:15
        }}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        returnKeyType={returnKeyType}
        keyboardType={keyboardType}
      />
    </View>
  );
};
