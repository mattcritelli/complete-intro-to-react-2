import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'


var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({ title: 'yay', color: 'peru' }),
        MyTitleFactory({ title: 'boo', color: 'tomato' }),
        MyTitleFactory({ title: 'hah', color: 'aquamarine' }),
        MyTitleFactory({ title: 'eek', color: 'chocolate' }   )
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
