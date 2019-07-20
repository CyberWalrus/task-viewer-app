import React, { PureComponent } from 'react';

const withAppState = (Component) => {
  class WithAppState extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
      };
      this.handleFormOpen = this.handleFormOpen.bind(this);
    }

    handleFormOpen() {
      this.setState({
        isOpen: true,
      });
    }

    render() {
      const { isOpen } = this.state;
      return <Component {...this.props} isOpen={isOpen} onFormOpen={this.handleFormOpen} />;
    }
  }
  return WithAppState;
};

export default withAppState;
