import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

//Ekranlar
//WordScreen(Kelime Ekranı - Anasayfa)
//WordPracticeScreen(Kelime Alıştırmaları Ekranı)
//SettingsScreen(Ayarlar Ekranı) 
import WordScreen from "./src/screens/WordScreen";
import WordPracticeScreen from "./src/screens/WordPracticeScreen";
import SettingsScreen from "./src/screens/SettingScreen";

//Tab Navigator oluşturuldu.
const Tab = createBottomTabNavigator();

export default function App() {
  return(
    //Bottom-Tabs(Alt gezinme sekmesi) burada başlıyor.
    //initialRouteName özelliği uygulama açıldığında varsayılan olarak hangi ekranın gözükeceğini belirler.
    //tabBarIcon BottomTabs'a iconlar ekler. Expo'nun Ionicons kütüphanesi kullanır.
    //tabBarActiveTintColor hangi tab seçili ise o tab'ı belirtilen renk yapar.
    //tabBarInactiveTintColor seçili olmayan tabların rengini belirler.
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Kelimeler" 
                     screenOptions={({ route }) => ({
                      tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === "Kelimeler"){
                          iconName = "book";
                        }
                        else if (route.name === "Alıştırmalar"){
                          iconName = "pencil";
                        }
                        else if (route.name === "Ayarlar"){
                          iconName = "settings-sharp";
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                      },
                      tabBarActiveTintColor: "#133E87",
                      tabBarInactiveTintColor: "gray",
                    })}
        >
        <Tab.Screen
          name="Kelimeler"
          component={WordScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Alıştırmalar"
          component={WordPracticeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Ayarlar"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}