import * as React from 'react';
import { Button } from 'react-native-paper';

const IconButtonComponent = (props) => (
    <Button
        icon="camera"
        mode="contained-tonal"
        onPress={() => console.log('Pressed')}
        buttonColor='#00B161'
        textColor='white'
        rippleColor={'#00B161'}
        // uppercase
        style={{
            width: '80%',
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 5,
            shadowColor: 'grew', 
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        }}
    >
        {props.name}
    </Button>
);

export default IconButtonComponent;