import React from 'react';
import ErrorPage from 'views/pages/ErrorPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      info: null
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error
    });
    // TODO: report to sentry
  }

  render() {
    return (
      <div>
        {this.state.hasError ? (
          <ErrorPage erorr={this.state.erorr} />
        ) : (
          this.props.router
        )}
      </div>
    );
  }
}

export default App;
