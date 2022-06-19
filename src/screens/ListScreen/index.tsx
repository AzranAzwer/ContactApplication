import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

import { ContactCard } from '../../components'
import { ListInterface } from '../../redux/types';
import { styles } from './ListScreen.styles';

export const ListScreen: React.FC = () => {
    const navigation = useNavigation()

    // get values from redux store
    const contactList = useSelector((state: any) => state.lists.contactList);
    return (
        <View>
            <TouchableOpacity style={styles.addButton}
                onPress={() => navigation.navigate('AddContactScreen' as any)}
            >
                <Text>
                    + ADD CONTACT
                </Text>
            </TouchableOpacity>

            <FlatList
                keyExtractor={(item) => item.id}
                data={contactList}
                style={{ paddingHorizontal: 25, }}
                renderItem={({ item }) => (
                    <ContactCard
                        item={item}
                        onPress={() => navigation.navigate('ContactScreen' as never, { user: item } as never)}
                    />
                )}
            />
        </View>
    );
};
