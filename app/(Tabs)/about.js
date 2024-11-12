import {ScrollView,Text } from "react-native";
import { Screen } from "../../components/Screen";

export default  function About(){
    return(
        <Screen>
            <ScrollView >

                <Text className = "mt-2 text-3xl font-bold text-white">Sobre el proyecto</Text>
                <Text className = "mt-2 text-lg text-white">Esta App es una aplicación móvil
                 diseñada para los amantes del cine que buscan una manera rápida y sencilla de explorar
                  las películas más populares. La aplicación aprovecha los datos proporcionados por una
                   API externa de The Movie Database (TMDb), lo que permite a los usuarios acceder a 
                   un listado actualizado de las películas más populares de la actualidad. Con esta 
                   app, puedes descubrir nuevos títulos, conocer detalles sobre tus películas favoritas
                    y estar al tanto de las últimas novedades en el mundo del cine.</Text>



            </ScrollView>
        </Screen>
    )
}