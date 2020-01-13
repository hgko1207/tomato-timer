import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from '../Button';

class Timer extends Component {
    // 해당 컴포넌트가 mounted 되기 전에 실행
    componentWillReceiveProps(nextProps) {
        const currentProps = this.props;
        if (!currentProps.isPlaying && nextProps.isPlaying) {
            // start the interval
            const timerInvterval = setInterval(() => {
                currentProps.addSecond();
            }, 1000);
            this.setState({ timerInvterval });
        } else if (currentProps.isPlaying && !nextProps.isPlaying) {
            // stop the interval
            clearInterval(this.state.timerInvterval);
        }
    }

    render() {
        const { isPlaying, elapsedTime, timerDuration, startTimer, restartTimer, addSecond } = this.props;

        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.upper}>
                    <Text style={styles.time}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    {!isPlaying && (<Button iconName="play-circle" onPress={startTimer} />)}
                    {isPlaying && (<Button iconName="stop-circle" onPress={restartTimer} />)}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CE0824"
    },
    upper: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    lower: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    time: {
        color: "white",
        fontSize: 120,
        fontWeight: "100"
    }
});

export default Timer;