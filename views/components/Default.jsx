const React = require('react');
class Default extends React.Component{
render(){
  return(

    <html>
        <head>
          {this.props.children}
          <link rel="stylesheet" href="/css/main.css"/>
        </head>
        <body>

        </body>
    </html>
    )
  }
}
module.exports = Default