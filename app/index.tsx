import { Dimensions, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';
import { FlashList } from "@shopify/flash-list";

const BiryaniImage = require('../assets/images/Biryani.png')
const SaladImage = require('../assets/images/Salad.png')
const LocationIcon = require('../assets/images/location.png')
const LocationBackground = require('../assets/images/locationBackground.png')
const ProfileIcon = require('../assets/images/Profile.png')
const SearchIcon = require('../assets/images/searchIcon.png')

const Dimen = Dimensions.get("window"); // Get screen width
const screenWidth = Dimen.width

const ResturantsData = [
  {
    title: "Salads Point",
    rating: 4.1,
    offer: "30% OFF upto $45"
  },
  {
    title: "Cators Point",
    rating: 4.8,
    offer: "10% OFF upto $20"
  },
  {
    title: "Subway",
    rating: 4.8,
    offer: "10% OFF upto $20"
  },
  {
    title: "Burger King",
    rating: 4.8,
    offer: "20% OFF upto $60"
  },
  {
    title: "Chai Point",
    rating: 4.8,
    offer: "10% OFF upto $20"
  },
  
];

const ResturantsDataList = () => {
  return (
    <FlashList
      data={ResturantsData}
      estimatedItemSize={100}
      renderItem={({ item }) => {

      return (
        <TouchableOpacity onPress={() => { console.log("on press")}} style={{backgroundColor:'white',flex:1,flexDirection:'column'}}>
          <Image 
          style={[{ width: '100%', height: screenWidth * 0.6 }]} // Scale image dynamically
          source={SaladImage}
          resizeMode="contain"
          ></Image>
          <View style={{flexDirection:'column'}}>
            <View style={{flexDirection:'row',justifyContent:"space-between",paddingHorizontal:20}}>
              <Text style={{fontSize:18}}>{item.title}</Text>
              <Text style={{fontSize:18}}>{item.rating}</Text>
            </View>
            <View>
              <Text style={{fontSize:18,paddingHorizontal:20}}>{item.offer}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )
    
    }}
    ListHeaderComponent={() => {
      return (
        <View style={{justifyContent:'center',alignItems:'center',minHeight:40}}>
          <Text style={{fontSize:20}}>All Restaurants</Text>
        </View>
      )
    }}
    contentContainerStyle={{ paddingHorizontal:10 }} 
    ItemSeparatorComponent={()=><View style={{height:10}}></View>}
    />
  );
};

const CurrentLocationBar = () => {
  return (
    <View style={{flexDirection:'row',marginHorizontal:10,marginBottom:10}}>
      <View style={{justifyContent: "center",alignItems: "center"}}> 
        <TouchableOpacity style={{justifyContent: "center",alignItems: "center"}} onPress={() => console.log("location clicked -- ")}>
        <Image source={LocationBackground} resizeMode="contain"/>
        <Ionicons name="location" size={24} style={{position:"absolute",color:'white'}}></Ionicons>
        </TouchableOpacity>
      </View>
      <View style={{flex:1,paddingBlockStart:2,paddingHorizontal:5}}>
        <Text style={{fontSize:20}}>Home</Text>
        <Text numberOfLines={1}>T103,Parasvnath Residency Sector 51 Noida...</Text>
      </View>
      <View style={{justifyContent: "center",alignItems: "center"}}>
        <TouchableOpacity onPress={() => console.log("profile clicked -- ")}>
        <Image
        source={ProfileIcon}
        resizeMode="contain"
        ></Image>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const SearchBar = () => {
  return (
    <View style={{backgroundColor:'#F1F1F1',flex:1,maxHeight:60}}>
      <TouchableOpacity 
      onPress={()=> console.log("search started -- ")}
      style={{flex:1,flexDirection:"row",backgroundColor:'white',margin:6,borderRadius:20}}>
        <View style={{alignItems:'center',justifyContent:'center',flex:1,maxWidth:60}}>
          <Image source={SearchIcon} resizeMode="contain"></Image>
        </View>
        <View style={{alignItems:'center',justifyContent:'flex-start',flex:1,flexDirection:'row',paddingHorizontal:10}}>
          <Text>
            Restaurant name, cusine or a dish
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}


export default function Index() {
  return (
    
    <SafeAreaView
    style={{
      flex: 1,flexDirection:'column'
    }}>
      <CurrentLocationBar></CurrentLocationBar>
      <SearchBar></SearchBar>
      <ResturantsDataList></ResturantsDataList>
    
    </SafeAreaView>

  );
}
