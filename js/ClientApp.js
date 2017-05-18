var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1({ style: { color: this.props.color }}, this.props.title )
      )
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function() {
    return (
      div(null,
        MyTitleFactory( { title: 'yay', color: 'peru' } ),
        MyTitleFactory( { title: 'boo', color: 'tomato' } ),
        MyTitleFactory( { title: 'hah', color: 'aquamarine' } ),
        MyTitleFactory( { title: 'eek', color: 'chocolate' } )
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById("app"))
