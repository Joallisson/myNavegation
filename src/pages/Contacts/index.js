import React from "react";
import {View, Text} from 'react-native'

export default function Contacts({navigation}){
    return(
        <View>
            <View style = {{paddingTop: 60}}>
                <Text>Nome: João Silva</Text>
                <Text>Telefone: (99) 99999-9999</Text>
                <Text
                onPress = {() => navigation.navigate('Information', 
                {
                    nome: 'João Silva',
                    telefone: '(99) 99999-9999',
                    endereco: 'Rua das flores',
                    numero: '765',
                    profissao: 'Carpinteiro',
                    email: 'joaosilva@carpintaria.com.br',
                })}
                >Information...</Text>
            </View>

            <View style = {{paddingTop: 60}}>
                <Text>Nome: Amanda de Alencar</Text>
                <Text>Telefone: (00) 00000-0000</Text>
                <Text
                onPress = {() => navigation.navigate('Information', 
                {
                    nome: 'Amanda de Alencar',
                    telefone: '(00) 00000-0000',
                    endereco: 'Av. estrela nova',
                    numero: '3658',
                    profissao: 'Desenvolvedora de Softwares',
                    email: 'amanda.dev@amandadev.com.br',
                })}
                >Information </Text>
            </View>
        </View>
    )
}