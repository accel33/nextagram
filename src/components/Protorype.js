import React, { Component } from 'react';
import { View } from "reactstrap";

class Prototype extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
              <View>
                {this.state.requestAuthentication && 
                  <Authenticate
                    onSuccess={() => console.log('Success!')}
                    onFail={() => console.log('Failed!')}
                    onComplete={() => this.setState({ requestAuthentication: false })}
                  />
                }
              </View>
            );
    }
}
 
export default Prototype;