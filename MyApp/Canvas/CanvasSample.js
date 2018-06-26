import React, { Component } from 'react';
import { View } from 'react-native';
import Canvas from 'react-native-canvas';

export default class CanvasSample extends React.Component {

    drawSquare1 = (canvas) => {
        const mCanvas = canvas.getContext('2d');
        mCanvas.fillStyle = 'red';
        mCanvas.fillRect(100, 100, 150, 150)
    }

    drawSquare2 = (canvas) => {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'purple';
        ctx.fillRect(10, 10, 100, 100);
    }

    render() {
        return (
            <View>
                {/* First it will draw first canvas and start other from first block position */}
                <Canvas ref={this.drawSquare1} />
                <Canvas ref={this.drawSquare2} />
            </View>
        )
    }

}