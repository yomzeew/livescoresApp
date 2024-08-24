import React, { useState, useRef } from 'react';
import { View, Text, TextInput } from 'react-native';

const OTPInput = () => {
    const [otp, setOtp] = useState(['','','','','']);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const inputRefs = useRef([]);

    const authenticateOtp = () => {
        const otpValue = otp.join('');
        console.log(otpValue)
        if(otpValue === '12345') {
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
            if (index < 4) {
                inputRefs.current[index + 1].focus();
            }
            else {
                authenticateOtp();
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