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
