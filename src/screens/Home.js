import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList, ActivityIndicator} from 'react-native';
import Card from '../components/Card';

const arrayDatos = [
    {
        id: 1,
        nombre: 'Juan',
        img: "https://thumbs.dreamstime.com/b/sentada-del-perrito-de-labrador-30817211.jpg"
    },
    {
        id: 2,
        nombre: 'Pedro',
        img: "https://thumbs.dreamstime.com/b/sentada-del-perrito-de-labrador-30817211.jpg"
    },
    {
        id: 3,
        nombre: 'Maria',
        img: "https://thumbs.dreamstime.com/b/sentada-del-perrito-de-labrador-30817211.jpg"
    }
]


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            cargando: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            this.setState({
                datos: data.results,
                cargando: false
            })
        })
    }
    , 1000)
    }

    render() {
        return (
            <View>
                {this.state.cargando ? <ActivityIndicator size="large" color="#0000ff" /> : 
                <FlatList
                    data={this.state.datos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => 
                        <Card nombre={item.name} img={item.image}/>
                    }
                />}
            </View>
        )
    }

}

export default Home;    




// class Home extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             datos: [],
//             cargando: true
//         }
//     }

//     componentDidMount() {
//         fetch('https://rickandmortyapi.com/api/character')
//         .then(response => response.json())
//         .then(data => {
//             this.setState({
//                 datos: data.results,
//                 cargando: false
//             })
//         })
//     }
   



//   render() {
//     return (
//       <View>
//         <Text>Aqui vamos a crear una Home copada!</Text>

//         <ActivityIndicator size="large" color="#0000ff" />

//          <Image source={require('../../assets/favicon.png')} style={{width: 200, height: 200}} // style={styles.img}
//         reasizeMode="contain"/> 

//         <FlatList
//             data={arrayDatos}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={({item}) => 

//                 <View>
//                     <Text>{item.nombre}</Text>
//                     <Image source={{uri: item.img}} style={styles.img} // style={styles.img}
//                     reasizeMode="contain"/>
//                 </View>
//             }
//         />
//                  </View>
                 
//     );
//   }
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     img:{
//       width: 200,
//       height: 200
//     }
//   });

// export default Home;

