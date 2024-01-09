import {
    View,
    StatusBar,
    Text,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import { COLORS } from './../constants/color/color';
import {
    Ionicons,
} from './../constants/icons/icons';
import { statusBarHeight } from './../utils/dimensions';
import { useNavigation } from '@react-navigation/native';

const StatusComponent = ({ title }) => {
    const navigation = useNavigation();

    return (
        <View>
            <StatusBar translucent backgroundColor="transparent" />
            <View
                style={{
                    position: 'relative',
                    paddingTop: statusBarHeight,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 15,
                    paddingBottom: 15,
                }}>
                {/* GO BACK BUTTON */}
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back" size={28} color={COLORS.green} />
                </TouchableOpacity>

                {/* TITLE */}
                <View>
                    <Text style={{ color: COLORS.green, fontSize: 22 }}>
                        {title}
                    </Text>
                </View>

                {/* NULL */}
                <View>
                    <Ionicons name="arrow-back" size={28} color={'transparent'} />
                </View>
            </View>
        </View>
    );
};

export default StatusComponent;