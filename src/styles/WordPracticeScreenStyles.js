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
    box: {
        height: height * 0.83,
        backgroundColor: "#fff",
    },
    listButton: {
        backgroundColor: "#133E87",
        borderTopRightRadius: 15,
        width: width * 0.3,
        height: height * 0.05,
        justifyContent: "center",
    },
    listButtonText : {
        color: "#fff",
        fontSize: dynamicFontSize(20),
        fontWeight: "600",
        textAlign: "center",
    },
    practiceInfo : {
        flexDirection: "row",
        justifyContent: "center",
        columnGap: 5,
        top: height * 0.05
    },
    practiceInfoLeft: {
        backgroundColor: "#CBDCEB",
        width: width * 0.3,
        height: height * 0.165,
        borderRadius: 15,
        justifyContent:"center",
    },
    practiceInfoRight : {
        backgroundColor: "#CBDCEB",
        width: width * 0.6,
        height: height * 0.08,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        padding: width * 0.02,
    },
    practiceList: {
        top: height * 0.11,
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },
    practiceInfoHeader: {
        color:"#133E87",
        textAlign:"left",
        fontWeight:"bold",
        fontSize: dynamicFontSize(19),
        flex: 5,
    },
    practiceInfoSub: {
        color:"#133E87",
        textAlign:"right",
        fontSize: dynamicFontSize(19),
        flex: 1,
    },
});

export default styles;