import React, { Componenet } from 'react';
import { View, Text, Share, Alert } from 'react-native';

export default class ShareSample extends React.Component {

    constructor(props) {
        super(props)
        this.shareContent = this.shareContent.bind(this)
    }

    shareContent() {
        Share.share({
            title: 'Sample title',
            message: 'Sample message',
            url: 'https://stackoverflow.com/users/4233197/hiren-patel'
          }, {
            // Android only, we may leave it as blank
            dialogTitle: 'Share BAM goodness',
            // iOS only:
            excludedActivityTypes: [
              'com.apple.UIKit.activity.PostToTwitter'
            ]
          })
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text onPress={() => this.shareContent()}>
                    Click here to share something
                    </Text>
            </View>
        )
    }
}