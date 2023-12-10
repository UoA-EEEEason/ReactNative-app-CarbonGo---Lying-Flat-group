import {
    View,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    StyleSheet,
} from 'react-native';
import React from 'react';
import { COLORS } from './../../constants/color/color';
import {
    StatusComponent,
    TextInputCompnent,
    ButtonComponent,
    IconButtonComponent,
    CardComponent,
} from './../../components';

const CommonDemo = () => {
    return (
        <ImageBackground
            source={require('./../../assets/images/background.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <SafeAreaView style={{ flex: 1 }}>
                <StatusComponent title={'Demo screen'} />
                <ScrollView>
                    <View>
                        <Text style={styles.demoText}>This is text color</Text>
                        <TextInputCompnent label={'Demo textInput'} />
                        <ButtonComponent name={'Demo Button'} />
                        <IconButtonComponent name={'Demo IconButton'} />
                        <CardComponent title={'Demo Card'} description={'Demo Card Description'}/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>

    );
};

export default CommonDemo;

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
    demoText: {
        fontSize: 30,
        color: COLORS.textGreen,
        textAlign: 'center',
    },
});