import React, { useState } from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    StyleSheet,
    Button,
    PermissionsAndroid,
    Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants/color/color';
import StatusComponent from './../../components/StatusComponent';
import TextInputComponent from './../../components/TextInputCompnent';
import ImagePicker from 'react-native-image-picker';

const SaveElecScreen = () => {
    const navigation = useNavigation();
    const [photo, setPhoto] = useState(null);

    const handleChoosePhoto = async () => {
        const options = {
            noData: true,
        };

        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: 'Storage Permission Required',
                    message: 'App needs access to your storage to download Photos',
                }
            );
            if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                return;
            }
        }

        ImagePicker.showImagePicker(options, response => {
            if (response.uri) {
                setPhoto(response.uri);
            }
        });
    };

    return (
        <ImageBackground
            source={require('./../../assets/images/background.png')}
            style={styles.backgroundImage}
            resizeMode="cover">
            <SafeAreaView style={styles.safeArea}>
                <StatusComponent title={'Electricity carbon footprint'} />
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <Image
                        source={require('./../../assets/images/logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.createText}>
                        Submit your Electricity carbon footprint
                    </Text>
                    <TextInputComponent
                        style={styles.input}
                        label={'The amount of electricity you use'}
                    />
                    <TextInputComponent
                        style={styles.input}
                        label={'Points you will earn'}
                    />
                    <Text style={styles.uploadPhotoText}>
                        Please upload your photo
                    </Text>
                    <TouchableOpacity
                        style={styles.photoButton}
                        onPress={handleChoosePhoto}>
                        <Text style={styles.buttonText}>Upload Photo</Text>
                    </TouchableOpacity>
                    {photo && (
                        <Image
                            source={{ uri: photo }}
                            style={styles.uploadedImage}
                        />
                    )}
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default SaveElecScreen;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '60%',
        height: undefined,
        aspectRatio: 1,
    },
    createText: {
        fontSize: 16,
        width: '80%',
        color: COLORS.black,
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'black',
        width: '80%',
        marginBottom: 20,
        borderRadius: 5,
    },
    loginButton: {
        width: '80%',
        paddingVertical: 12,
        borderRadius: 5,
        backgroundColor: COLORS.buttonGreen,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 20,
        color: COLORS.white,
    },
    uploadPhotoText: {
        fontSize: 12,
        width: '80%',
        color: COLORS.black,
        marginBottom: 5,
    },
    photoButton: {
        width: '80%',
        paddingVertical: 12,
        borderRadius: 5,
        backgroundColor: COLORS.buttonGreen,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    uploadedImage: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
});