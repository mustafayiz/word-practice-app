import {View, Text, SafeAreaView, TouchableOpacity, Dimensions, PixelRatio } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/WordScreenStyles";

const {height, width} = Dimensions.get("window");
const scale = width / 400;
const dynamicSize = (size) => Math.round(PixelRatio.roundToNearestPixel(size * scale));

const dynamicFontSize = (size) => {
    const newSize = size * scale; // Genişlik bazlı ölçekleme
    const fontScale = PixelRatio.getFontScale(); // Cihazdaki font ölçeği
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) / fontScale; // Hem ölçekleme hem cihaz font ayarı
};

export default function WordScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}> 
                <TouchableOpacity style={styles.listButton}>
                    <Text style={styles.listButtonText}>Liste 1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.createListButton}>
                    <Text style={{fontSize: dynamicFontSize(20), fontWeight: "bold", color:"#fff", textAlign:"center"}}>+</Text> 
                </TouchableOpacity>

                <View style={styles.filterButtons}> 
                    <TouchableOpacity>
                        <Ionicons name="search" style={{fontSize: dynamicFontSize(28), color:"#133E87"}} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Ionicons name="filter" style={{fontSize: dynamicFontSize(28), color:"#133E87"}} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}> 
              <Text style={{textAlign:"center", fontSize: dynamicFontSize(27), color:"#858585"}}> Bu listede kelime yok eklemek için + butonuna tıklayın.</Text>
            </View>
            <TouchableOpacity style={styles.addButton} >
                <Ionicons name="add"style={{fontSize: dynamicFontSize(30), color:"#fff"}} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};