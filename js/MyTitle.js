/* old MyTitle.js

import React from 'react'

var MyTitle = React.createClass({
  render: function () {
    const style = {color: this.props.color}
    return (
      <div id='mt'>
        <h1 style= { style }>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

export default MyTitle

//////////////////////////
/////old ClientApp.js/////
//////////////////////////

import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div id='mfc'>
        <MyTitle title='yayyyyy' color='tomato' />
        <MyTitle title='eeeeek' color='darkred' />
        <MyTitle title='wowza' color='goldenrod' />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
*/
