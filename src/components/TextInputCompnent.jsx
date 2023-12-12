import * as React from 'react';
import { TextInput } from 'react-native-paper';

const TextInputComponent = (props) => {
    const [text, setText] = React.useState("");

    const customTheme = {
        colors: {
            primary: 'black',
        },
    };

    return (
        <TextInput
            label={props.label}
            value={text}
            mode='flat'
            onChangeText={text => setText(text)}
            style={props.style}
            theme={customTheme}
            // {
            //     backgroundColor: 'transparent',
            //     borderWidth: 1,
            //     borderColor: 'black',
            //     width: '80%',
            //     alignSelf: 'center',
            //     marginTop: 20,
            //     borderBottomLeftRadius: 5,
            //     borderBottomRightRadius: 5,
            // }
        />
    );
};

export default TextInputComponent;