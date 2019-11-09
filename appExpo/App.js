import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Dimensions } from 'react-native';
import axios from 'axios'

const URL = 'http://172.16.20.28:3200/api/curso'

const width = Dimensions.get('window').width



export default class App extends React.Component {
  initialState = {
    data: [{
      codigo: 123,
      descricao: 'React',
      cargaHoraria: 20,
      preco: 123.1,
      categoria: 'INFORMÁTICA'
    }],
    isRefreshing: false
  }

  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  componentDidMount() {
    this._getLista()
  }

  _getLista() {
    this.setState({ ...this.state, isRefreshing: true })
    axios.get(URL)
      .then(response => {
        if (response.data) {
          this.setState({ ...this.state, data: response.data, isRefreshing: false })
        }
      })
      .catch(error => {
        this.setState({ ...this.state, isRefreshing: false })
        console.log(error)
      })
  }

  render() {

    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safe}>
          <Text style={styles.texto}>Batata</Text>
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={this.state.data}
            refreshing={this.state.isRefreshing}
            onRefresh={() => { this._getLista() }}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.item} key={`lista-curso-${index}`}>
                  <Text style={styles.conteudo}>{item.codigo}</Text>
                  <Text style={styles.conteudo}>{item.descricao}</Text>
                  <Text style={styles.conteudo}>{item.cargaHoraria}</Text>
                  <Text style={styles.conteudo}>{item.preco}</Text>
                  <Text style={styles.conteudo}>{item.categoria}</Text>
                </View>
              )
            }}
          />
        </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '5%',
  },
  safe: {
    width: '100%',
  },
  conteudo: {
    margin: 10,
    fontSize: 20,
    textAlign: 'left',
    color: "#fff"
  },
  texto: {
    alignItems: "center",
    fontSize: 30,
    margin: 20,
    color: '#fff',
  },
  item: {
    alignItems: "flex-start",
    backgroundColor: "#7F3123",
    flexGrow: 1,
    margin: 4,
    padding: 20
  },
});
