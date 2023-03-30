import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import axios from 'axios';

class Converter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usd: '',
            tl: '',
            jpy: '',
            eur: '',
            cad: '',
            input: '',
            rates: [],
        };
        this.getRates = this.getRates.bind(this);
    }

    getRates (){

        axios.get('https://api.apilayer.com/fixer/latest?apikey=5m01449jyY7Be1PKXxGgDEkMU6FDwoeq&symbols=USD,TRY,JPY,EUR,CAD&base=EUR' )
            .then(response => {
               console.log (response);
               const rates = response.data.rates;
                this.setState({
                    rates: rates,
                });
            }
        );
    }
    componentDidMount() {
        console.log('componentDidMount');
        this.getRates();
    }
    render() {
        
        const{converterWrapper, inputStyle, textStyle} = styles;
        const {usd, tl, jpy, eur, cad, input,rates} = this.state;
        return (
            <View style={converterWrapper}>
                     <TextInput placeholder = 'Enter EUR Value' style={inputStyle}
                    keyboardType='numeric'
                     onChange={(text)=>{
                      const i = parseFloat(text.nativeEvent.text);
                      isNaN(i) ? this.setState({input: ''}) :
                           this.setState({
                                  input: text,
                                  tl:(i * rates['TRY']).toFixed(3),
                                  usd:(i * rates['USD']).toFixed(3),
                                  jpy:(i * rates['JPY']).toFixed(3),
                                  eur:(i * rates['EUR']).toFixed(3),
                                  cad:(i * rates['CAD']).toFixed(3),
                           });
      
                      }}
                      value={{input}}/>
      
                <Text style={textStyle}>USD: {usd}</Text>
                <Text style={textStyle}>TRY: {tl}</Text>
                <Text style={textStyle}>JPY: {jpy}</Text>
                <Text style={textStyle}>EUR: {eur}</Text>
                <Text style={textStyle}>CAD: {cad}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  converterWrapper: {
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputStyle: {
        width: 200,
        height: 40,
        paddingBottom: 25,
    },
    textStyle: {
        width: 170,
        height: 50,
        fontWeight: 'bold',
    },
});
export default Converter;

            