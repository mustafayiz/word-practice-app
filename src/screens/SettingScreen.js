import {View, Text, SafeAreaView, TouchableOpacity, Dimensions, PixelRatio, Switch } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Foundation from '@expo/vector-icons/Foundation';
import styles from "../styles/SettingScreenStyles";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const {height, width} = Dimensions.get("window");
const scale = width / 400;
const dynamicSize = (size) => Math.round(PixelRatio.roundToNearestPixel(size * scale));

const dynamicFontSize = (size) => {
    const newSize = size * scale; // Genişlik bazlı ölçekleme
    const fontScale = PixelRatio.getFontScale(); // Cihazdaki font ölçeği
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) / fontScale; // Hem ölçekleme hem cihaz font ayarı
};

export default function SettingsScreen() {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <View style={styles.buttonsContainer}> 
                    <TouchableOpacity style={styles.buttons}>
                        <MaterialCommunityIcons name="theme-light-dark" style={styles.buttonsIcons} />
                        <Text style={styles.buttonsText}>Karanlık Tema</Text>
                        <Switch style={styles.switchButton}></Switch>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttons}>
                        <Foundation name="page-export-pdf" style={styles.buttonsIcons} />
                        <Text style={styles.buttonsText}>Kelime Listesini PDF Dosyasına Aktar</Text> 
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttons}>
                        <Foundation name="page-export-doc" style={styles.buttonsIcons} />
                        <Text style={styles.buttonsText}>Kelime Listesini DOC Dosyasına Aktar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttons}>
                        <AntDesign name="infocirlce" style={styles.buttonsIcons} />
                        <Text style={styles.buttonsText}>Uygulama Hakkında</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttons}>
                        <Foundation name="star" style={styles.buttonsIcons} />
                        <Text style={styles.buttonsText}>Uygulamayı Değerlendir</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.buttons}>
                        <MaterialIcons name="contact-support" style={styles.buttonsIcons} />
                        <Text style={styles.buttonsText}>İletişim</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttons}>
                        <Foundation name="page" style={styles.buttonsIcons} />
                        <Text style={styles.buttonsText}>Gizlilik Sözleşmesi</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomTextContainer}>
                    <Text>Versiyon 1.0</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};