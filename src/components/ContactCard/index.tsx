import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { ListInterface } from '../../redux/types';

interface ContactCardProps {
    item: ListInterface,
    onPress(): void
}

export const ContactCard: React.FC<ContactCardProps> = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={{
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: 18,
            backgroundColor: 'green',
            shadowColor: 'black',
            shadowOpacity: 0.2,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 12,
            marginBottom: 12,
            height: 55,
            borderRadius: 20,
            paddingHorizontal: 30,
        }}
            onPress={onPress}>
            <View>
                <Text style={{ fontWeight: '700' }}>
                    Name: {item.name}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>
                    Mobile: {item.mobile}
                </Text>
                <Text>
                    Email: {item.email}
                </Text>
            </View>
        </TouchableOpacity>
    );
};


