 import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OTPVerification = () => {
    const [otp, setOtp] = useState('');

    const handleKeyPress = (digit) => {
        if (otp.length < 6) {
            setOtp(otp + digit);
        }
    };

    const handleBackspace = () => {
        setOtp(otp.slice(0, -1));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter OTP</Text>

            {/* Display OTP boxes */}
            <View style={styles.otpContainer}>
                {Array(6)
                    .fill('')
                    .map((_, index) => (
                        <View key={index} style={styles.otpBox}>
                            <Text style={styles.otpText}>
                                {otp[index] || ''}
                            </Text>
                        </View>
                    ))}
            </View>

            {/* Custom Numeric Keyboard */}
            <View style={styles.keyboardContainer}>
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((digit) => (
                    <TouchableOpacity
                        key={digit}
                        style={styles.key}
                        onPress={() => handleKeyPress(digit)}
                    >
                        <Text style={styles.keyText}>{digit}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity style={styles.key} onPress={handleBackspace}>
                    <Text style={styles.keyText}>⌫</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default OTPVerification;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    otpBox: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    otpText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    keyboardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '80%',
    },
    key: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#ddd',
        borderRadius: 30,
    },
    keyText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});