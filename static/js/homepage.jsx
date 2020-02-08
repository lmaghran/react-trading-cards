"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <p>What's up? Ready to play?!</p>
        <a href="/cards"> Click here to continue playing!</a>
        <img class="yellow" src="/static/img/balloonicorn.jpg"/>
      </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
