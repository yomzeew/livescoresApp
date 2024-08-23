import React, { useState, useRef } from 'react';
import { View, Text, TextInput } from 'react-native';

const OTPInput = () => {
    const [otp, setOtp] = useState(['','','','','']);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const inputRefs = useRef([]);

    const authenticateOtp = () => {
        const otpValue = otp.join('');

        if(otpValue === '123456') {
            setIsAuthenticated(true);
        } else {
            alert('Invalid OTP');
        }
        return isAuthenticated;
    }

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if(value !== '') {
            if(index === 5) {
                return
                alert('INvalid Otp')
            } else if (index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };
    
    return (
        <View className="flex items-center flex-row">
            {
                otp.map((item, index) => (
                    <TextInput
                        key={index}
                        className="w-[45px] h-[45px] m-[10px] rounded-xl border-2 border-gray-400 text-center"
                        value={item}
                        onChangeText={(value) => handleOtpChange(index, value)}
                        keyboardType='numeric'
                        maxLength={1}
                        ref={(input) => (inputRefs.current[index] = input)}
                     />
                ))
            }
        </View>
    )
};

export default OTPInput;