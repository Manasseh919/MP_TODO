import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView } from "react-native";
import React from "react";

const login = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View style={{ marginTop: 80 }}>
        <Text style={{fontSize:18,fontWeight:"600",color:"#0066b2"}}>TODO-LIST TRACKER</Text>
      </View>
      <KeyboardAvoidingView>
        <View style={{alignItems:'center'}}>
            <Text style={{fontSize:16,fontWeight:"600",marginTop:20,}}>Log in to your account</Text>
        </View>
        <View>
            
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({});
