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
        justifyContent: "flex-end",
    },
    header: {
        flexDirection: "row",
    },
    listButton: {
        backgroundColor: "#133E87",
        width: width * 0.3,
        height: height * 0.05,
        justifyContent: "center"
    },
    listButtonText: {
        fontSize: dynamicFontSize(20),
        fontWeight: "600",
        color:"#fff",
        textAlign: "center",
    },
    createListButton: {
        backgroundColor: "#c56d07",
        borderTopRightRadius: 15,
        width: width * 0.1,
        height: height * 0.05,
        justifyContent: "center"
    },
    filterButtons: {
        flexDirection: "row",
        alignItems: "center",
        left: width * 0.40,
        gap: 10,
    },
    box: {
        height: height * 0.83,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    addButton: {
        position: "absolute",
        right: width * 0.06,
        bottom: height * 0.08,
        backgroundColor: "#133E87",
        width: 70,
        height: 70,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
});

export default styles;