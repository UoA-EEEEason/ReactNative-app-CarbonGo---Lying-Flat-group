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
        date: '2023-04-05T14:30:00.000Z',
        content: 'This this news1',
        image: require('./../../assets/images/news1.png'),
    },
    {
        id: 2,
        title: 'news2',
        date: '2023-04-05T14:30:00.000Z',
        content: 'This this news2',
        image: require('./../../assets/images/news2.png'),
    },
    {
        id: 3,
        title: 'news3',
        date: '2023-04-05T14:30:00.000Z',
        content: 'This this news3',
        image: require('./../../assets/images/news1.png'),
    },

    // ... more items
];

const CardComponent = ({ image, title, content, date, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Card
            style={{
                width: wp(80),
                alignSelf: 'center',
                marginTop: 20,
                backgroundColor: COLORS.cardBackground,
            }}>
            <Card.Cover source={image} style={{ marginBottom: 5 }} />
            <Card.Content>
                <Text variant="titleLarge">{title}</Text>
                <Text variant="bodyMedium">{content}</Text>
                <Text variant="bodyMedium" style={{ color: COLORS.grey }}>{date}</Text>
            </Card.Content>
        </Card>
    </TouchableOpacity>
);

const NewsScreen = () => {
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
                            console.log('News')
                        }} style={styles.tabLeftButton}><Text style={styles.tabText}>News</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            console.log('Messages')
                        }} style={styles.tabRightButton}><Text style={styles.tabText}>Messages</Text></TouchableOpacity>
                    </View>
                    <View style={styles.cards}>
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

export default NewsScreen;

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
        backgroundColor: COLORS.white,
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
        backgroundColor: COLORS.buttonGreen,
    },
    tabRightButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(5),
        width: wp(32),
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: COLORS.white,
    },
    tabText: {
        fontSize: 15,
        color: COLORS.black,
    }
});