// React = require 'react'

// # Assign React to Window so the Chrome React Dev Tools will work.
// window.React = React

// Router = require('react-router')
// Route = Router.Route


// # Require route components.
// App = require './app/app'
// StyleGuide = require './app/styleguide'
// HelloWorld = require './app/hello_world'

// # routes = (
// #   <Route handler={App}>
// #     <Route name="hello" handler={HelloWorld} path="/" />
// #     <Route name="styleguide" handler={StyleGuide} path="/styleguide" />
// #   </Route>
// # )
// # Router.run(routes, (Handler) ->
// #   React.render <Handler/>, document.getElementById 'content'
// # )

// CommentBox = React.createClass
//   render: ->

//       <div className="commentBox">
//         Hello, world! I am a CommentBox.
//       </div>


// ReactDOM.render(
//   <CommentBox />,
//   document.getElementById('content')
// )

var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require("./app/CommentBox");



ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000}/>,
  document.getElementById('content')
);