import {
    View,
    SafeAreaView,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    Image,
    StyleSheet,
} from 'react-native';
import React from 'react';
import { COLORS } from './../../constants/color/color';
import {
    StatusComponent,
} from './../../components';
import { hp, wp } from './../../utils/dimensions';
import { Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const cartItems = [
    {
        id: 1,
        title: 'news1',
        content: 'This this news1',
    },
    {
        id: 2,
        title: 'news2',
        content: 'This this news2',
    },
    {
        id: 3,
        title: 'news3',
        content: 'This this news3',
    },

    // ... more items
];

const CardComponent = ({ title, content }) => (
    <Card
        style={styles.card}>
        <View style={styles.cardLayout}>
            <Image source={require('./../../assets/images/logoCircle.png')} style={styles.cardImage} />
            <View style={styles.cardText}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}>{content}</Text>
            </View>
        </View>
    </Card>
);

const MessageScreen = () => {
    const navigation = useNavigation();

    const handlePress = (item) => {
        // Navigate to the NewsDetail screen with parameters
        navigation.navigate('NewsDetail', { item });
    };

    return (
        <ImageBackground
            source={require('./../../assets/images/background.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <SafeAreaView style={{ flex: 1 }}>
                <StatusComponent title={'News'} />
                <ScrollView>
                    <View style={styles.tab}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('News');
                            console.log('News')
                        }} style={styles.tabLeftButton}><Text style={styles.tabText}>News</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            console.log('Messages')
                        }} style={styles.tabRightButton}><Text style={styles.tabText}>Messages</Text></TouchableOpacity>
                    </View>
                    <View>
                        {cartItems.map(item => (
                            <CardComponent
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                date={item.date}
                                content={item.content}
                                onPress={() => handlePress(item)}
                            />
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>

    );
};

export default MessageScreen;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight || 0,
    },
    tab: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: hp(5),
        width: wp(64),
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 10,
        backgroundColor: COLORS.buttonGreen,
        borderRadius: 20,
        marginBottom: 10,
    },
    tabLeftButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(5),
        width: wp(32),
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: COLORS.white,
    },
    tabRightButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(5),
        width: wp(32),
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: COLORS.buttonGreen,
    },
    tabText: {
        fontSize: 15,
        color: COLORS.black,
    },
    card: {
        width: wp(80),
        alignSelf: 'center',
        marginTop: hp(2),
        backgroundColor: COLORS.cardBackground,
        overflow: 'hidden',
    },
    cardLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardImage: {
        height: hp(10),
        width: wp(20),
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    cardText: {
        flex: 1,
        paddingLeft: wp(4),
    },
    title: {
        fontSize: wp(5),
        color: COLORS.black,
        marginBottom: hp(1),
    },
    content: {
        fontSize: wp(4),
        color: COLORS.black,
    },
});