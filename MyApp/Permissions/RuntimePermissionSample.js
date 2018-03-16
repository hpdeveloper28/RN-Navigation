import React, { Component } from 'react';
import { Text, PermissionsAndroid, Alert } from 'react-native';

export default class RuntimePermissionSample extends React.Component {

    constructor(props) {
        super(props);
    }

    async requestCameraPermission() {
        if (Platform.OS === 'ios') {
            alert("You can use the camera ios");
        } else {
            const chckCamera = PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);
            if (chckCamera === PermissionsAndroid.RESULTS.GRANTED) {
                alert("You can use the camera..0.");
            } else {
                try {
                    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA,
                        {
                            'title': 'Cool Photo App Camera Permission',
                            'message': 'Cool Photo App needs access to your camera ' +
                                'so you can take awesome pictures.'
                        }
                    )
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        alert("You can use the camera..1.");
                    } else {
                        alert("Camera permission denied");
                    }
                } catch (err) {
                    alert(err)
                }
            }
        }
    };

    render() {
        return (
            <Text
                onPress={() => this.requestCameraPermission()}>
                Request Camera Permission
            </Text>
        )
    }
}