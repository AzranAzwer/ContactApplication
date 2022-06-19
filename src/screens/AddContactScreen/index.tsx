import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import uuid from 'react-native-uuid';

import { ContactCard, TextInput } from '../../components'
import { addContact } from '../../redux';
import { ListInterface } from '../../redux/types';
import { useNavigation } from '@react-navigation/native';
import { styles } from './AddContactScreen.styles';
import { validateEmail } from '../../helper/utils';

export const AddContactScreen: React.FC = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [userDetails, setUserDetails] = useState({
        id: uuid.v4(),
        name: "",
        mobile: '',
        email: ''
    })
    const [error, setError] = useState(false)
    const [errorEmail, setEmailError] = useState(false)

    const onChangeText = (key: string, value: any) => {
        if (key === 'email') {
            setEmailError(false)
        }
        setError(false)
        setUserDetails({
            ...userDetails,
            [key]: value,
        });
    };

    const onSubmit = () => {
        if (userDetails.name === "" || userDetails.mobile === "" || userDetails.email === "") {
            setError(true)
        } else {
            if (validateEmail(userDetails.email)) {
                dispatch(addContact(userDetails) as any)
                navigation.navigate('ListScreen' as any)
            } else {
                    setEmailError(true)
                }
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textContainer}>
                Name:
            </Text>
            <TextInput
                placeholder="Enter Name ..."
                onChangeText={(value: any) => onChangeText('name', value)}
                value={userDetails.name}
                returnKeyType="next"
                keyboardType={'default'}
            />
            <Text style={styles.textContainer}>
                Mobile:
            </Text>
            <TextInput
                placeholder="Enter Mobile ..."
                onChangeText={(value: any) => onChangeText('mobile', value)}
                value={userDetails.mobile}
                returnKeyType="next"
                keyboardType={'phone-pad'}
            />
            <Text style={styles.textContainer}>
                Email:
            </Text>
            <TextInput
                placeholder="Enter Email ..."
                onChangeText={(value: any) => onChangeText('email', value)}
                value={userDetails.email}
                returnKeyType="done"
                keyboardType={'email-address'}
            />

            {error ?  (<Text style={styles.emptyError}>
                Please enter all details
            </Text>) : errorEmail ?(<Text style={styles.emptyError}>
                Please enter correct email ID
            </Text>) : null }

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => {
                        setUserDetails({
                            id: '',
                            name: '',
                            mobile: '',
                            email: ''
                        }), setError(false)
                    }}>
                    <Text>
                        clear
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={onSubmit}
                >
                    <Text>
                        Add Contact
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};
