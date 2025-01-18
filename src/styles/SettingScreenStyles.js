import { StyleSheet, Dimensions, PixelRatio } from "react-native";

const {height, width} = Dimensions.get("window");
const scale = width / 400;
const dynamicSize = (size) => Math.round(PixelRatio.roundToNearestPixel(size * scale));

const dynamicFontSize = (size) => {
    const newSize = size * scale; // Genişlik bazlı ölçekleme
    const fontScale = PixelRatio.getFontScale(); // Cihazdaki font ölçeği
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) / fontScale; // Hem ölçekleme hem cihaz font ayarı
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e3ecf5",
        justifyContent: "center",
    },
    box: {
    },
    buttonsContainer: {
        rowGap: 20,
        margin: width * 0.05,
    },
    buttons: {
        width: width * 0.9,
        height: height * 0.08,
        borderRadius: 20,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems:"center",
        columnGap: 24,
    },
    buttonsText: {
        fontSize: dynamicFontSize(17),
        fontWeight: "600",
        color: "#133E87",
    },
    buttonsIcons: {
        fontSize: dynamicFontSize(28),
        fontWeight: "600",
        color: "#133E87",
        left: width * 0.04
    },
    bottomTextContainer: {
        alignItems: "center",
        top: height * 0.05,
    },
    switchButton: {
        left: width * 0.25,
        
    },
});

export default styles;