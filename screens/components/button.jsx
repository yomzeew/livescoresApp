import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Text, TouchableOpacity } from "react-native"

export default function Button({ text, iconName, iconSize, color, background, className, ...props }) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: background
            }}
            className={`${className} flex flex-row items-center p-2 w-fit rounded-full`}
            {...props}
        >
            <MaterialCommunityIcons
                name={iconName}
                size={iconSize || 20}
                color={color}
            />
            <Text
                style={{
                    color: color
                }}
            >{text}</Text>
        </TouchableOpacity>
    )
}
export function CustomButton({ text, iconName, iconSize, color, background, className, selected, ...props }) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: background
            }}
            className={`${className} ${selected && "bg-blue-100"} flex flex-row items-center p-2 w-fit border border-blue-950 rounded-full`}
            {...props}
        >
            <MaterialCommunityIcons
                name={iconName}
                size={iconSize || 20}
                color={color}
            />
            <Text
                className="text-blue-950 ml-1"
            >{text}</Text>
        </TouchableOpacity>
    )
}