const React = require('react');
class Index extends React.Component{
  render(){
    return(
      <html>
        <head>
          <link rel="stylesheet" href="/css/main.css"/>
          <title>Sleeping Beautiful</title>
        </head>
        <body>
          <div class ="header">
            <h1>Welcome, Beautiful</h1>
            <div id="navbar">
              <a href="/sleepware">Sleepware</a>
              <a href="/skincare">Skin Care</a>
            </div>
          </div>
          <div class="gallery">

          </div>
        </body>
      </html>
    )
  }
}
module.exports = Index