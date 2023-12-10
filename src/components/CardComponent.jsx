import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CardComponent = (props) => (
    <Card
        style={{
            width: '80%',
            alignSelf: 'center',
            marginTop: 20,
            backgroundColor: '#F2FDEA',
        }}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
            <Text variant="titleLarge">{props.title}</Text>
            <Text variant="bodyMedium">{props.description}</Text>
        </Card.Content>
        <Card.Actions>
            <Button
                onPress={() => console.log('Pressed')}
            >
                Ok
            </Button>
        </Card.Actions>
    </Card>
);

export default CardComponent;