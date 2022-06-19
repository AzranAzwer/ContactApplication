import React from 'react';
import { View, Text } from 'react-native'

import { styles } from './ContactScreen.styles';

interface ContactScreenProps {
    route: any
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ route }) => {
    const item = route.params.user
    return (
        <View>
            <View style={styles.textConatiner}>
                <Text style={styles.fontStyle}>
                    Name : {item.name}
                </Text>
                <Text style={styles.fontStyle}>
                    Email : {item.email}
                </Text>
                <Text style={styles.fontStyle}>
                    Mobile : {item.mobile}
                </Text>
            </View>
        </View>
    );
};
