import React from 'react';
import './App.css';
import ChannelList from './Channel';
import SearchBox from './SearchBox';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputText: ""
    };

    this.searchBoxHandler = this.searchBoxHandler.bind(this)
  }

  searchBoxHandler(data) {
    this.setState({
      inputText: data
    })

    //console.log(this.state)
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <SearchBox passInputText={this.searchBoxHandler}/>

          <ChannelList inputText={this.state.inputText} channels={[
            { avatar: "avatarUD.png", name: "Universo Discreto", description: "Computação" },
            { avatar: "avatarPB.jpg", name: "Peixe Babel", description: "Computação" },
            { avatar: "avatarPD.jpg", name: "Programação Dinâmica", description: "Computação" },
            { avatar: "avatarLOH.jpg", name: "Leitura Obrigahistória", description: "História" },
            { avatar: "avatarMDM.jpg", name: "Manual do Mundo", description: "Tecnologia e Ciência" },
            { avatar: "avatarNV1C.jpg", name: "Nunca Vi 1 Cientista", description: "Ciência em Geral" },
            { avatar: "avatarPIRULA.jpg", name: "Canal do Pirulla", description: "Ciência em Geral" },
            { avatar: "avatarBLABLA.jpg", name: "Bláblálogia", description: "Ciência em Geral" },
            { avatar: "avatarDEVANIL.jpg", name: "Alimente o Cérebro", description: "Ciências Humanas" },
          ]}/>
        </header>
      </div>
    );
  }
}

export default App;
