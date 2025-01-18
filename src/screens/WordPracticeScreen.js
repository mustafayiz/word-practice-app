import { View, Text, TouchableOpacity, SafeAreaView, Dimensions, PixelRatio } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/WordPracticeScreenStyles";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const {height, width} = Dimensions.get("window");
const scale = width / 400;
const dynamicSize = (size) => Math.round(PixelRatio.roundToNearestPixel(size * scale));

const dynamicFontSize = (size) => {
    const newSize = size * scale; // Genişlik bazlı ölçekleme
    const fontScale = PixelRatio.getFontScale(); // Cihazdaki font ölçeği
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) / fontScale; // Hem ölçekleme hem cihaz font ayarı
};

export default function WordPracticeScreen() {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <TouchableOpacity style={styles.listButton}>
                    <Text style={styles.listButtonText}>Liste 1</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
                <View style={styles.practiceInfo}> 
                    <View>
                        <TouchableOpacity style={styles.practiceInfoLeft}>
                            <Text style={{color:"#133E87", textAlign:"center", fontWeight:"bold", fontSize: dynamicFontSize(21)}}>Toplam Kelime</Text>
                            <Text style={{color:"#133E87", textAlign:"center", fontSize: dynamicFontSize(22)}}>150</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{rowGap: 5}}> 
                        <TouchableOpacity style={styles.practiceInfoRight}>
                            <Text style={styles.practiceInfoHeader}>Öğrenilen Kelimeler</Text>
                            <Text style={styles.practiceInfoSub}>120</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.practiceInfoRight}>
                            <Text style={styles.practiceInfoHeader}>Zor Kelimeler</Text>
                            <Text style={styles.practiceInfoSub}>15</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.practiceList}>
                    <TouchableOpacity style={{backgroundColor:"#FFD670", width: width * 0.45, height: height * 0.24, borderRadius: 15,}}>
                        <Text style={{fontSize: dynamicFontSize(22), fontWeight:"bold", padding: width * 0.02, color:"#A57820"}}>Kelime Eşleştirme</Text>
                        <Ionicons name="grid" style={{position:"absolute", bottom: height * 0.004, left: width * 0.26, fontSize: dynamicFontSize(74), color:"#A57820"}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:"#FF9770", width: width * 0.45, height: height * 0.24, borderRadius: 15,}}>
                        <Text style={{fontSize: dynamicFontSize(22), fontWeight:"bold",  padding: width * 0.02, color:"#A84A35"}}>Quiz</Text>
                        <MaterialIcons name="quiz" style={{position:"absolute", bottom: height * 0.004, left: width * 0.26, fontSize: dynamicFontSize(74), color:"#A84A35"}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:"#E9FF70", width: width * 0.45, height: height * 0.24, borderRadius: 15,}}>
                        <Text style={{fontSize: dynamicFontSize(22), fontWeight:"bold", padding: width * 0.02, color:"#868E23"}}>Yazma Alıştırması</Text>
                        <Entypo name="new-message" style={{position:"absolute", bottom: height * 0.004, left: width * 0.26, fontSize: dynamicFontSize(74), color:"#868E23"}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:"#FF70A6", width: width * 0.45, height: height * 0.24, borderRadius: 15,}}>
                        <Text style={{fontSize: dynamicFontSize(22), fontWeight:"bold", padding: width * 0.02, color:"#BC336B"}}>Kelime   Bulmaca</Text>
                        <Ionicons name="extension-puzzle" style={{position:"absolute", bottom: height * 0.004, left: width * 0.26, fontSize: dynamicFontSize(74), color:"#BC336B"}} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};