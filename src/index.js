import React from 'react';
import $ from 'jquery';

class Snapcode extends React.Component {
  constructor(){
    super();
    this.state = {
      svg:[]
    };
  }

  componentWillMount() {
    let url = 'https://crossorigin.me/https://feelinsonice-hrd.appspot.com/web/deeplink/snapcode?username='+this.props.username +'&type=SVG';
    $.ajax({
      type: 'GET',
      url: url,
      success: function(data) {
        this.setState({
          svg: Object.keys(data.children[0].children).map(function (key) {
            return data.children[0].children[key].attributes[0].value;
          })
        });
      }.bind(this)
    });
  }

  render() {
    return (
        <div>
          <svg width={this.props.width ? this.props.width : 320}
               height={this.props.height ? this.props.height : 320}
               version="1.1"
               viewBox="0 0 320 320"
               xmlns="http://www.w3.org/2000/svg">
            <path d={this.state.svg[0]} fill={this.props.dotsColor ? this.props.dotsColor : '#000000'}/>
            <path d={this.state.svg[1]} fill={this.props.backgroundColor ? this.props.backgroundColor : '#FFFC00'}/>
            <path d={this.state.svg[2]} fill={this.props.ghostColor ? this.props.ghostColor : '#FFFFFF'}/>
          </svg>
        </div>
      )
  }
};

export default Snapcode;
