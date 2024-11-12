import { View, Text } from "react-native";

export  function Score({score , maxScore}) {

    function getColor(){
        if(score < 4){return "bg-red-500"}
        if( score <7){return "bg-yellow-500"}
        return "bg-green-500"

    }

    const className = getColor();

  return (
    <View className= {`${className} items-center justify-center w-8 h-8 rounded-full `}>
         <Text className="text-lg font-bold text-white">
            {score}
         </Text>
    </View>    
  )
}
