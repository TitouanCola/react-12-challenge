import React, { Component } from 'react';

class TabSelector extends Component {

  render() {
    return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={this.props.props.handleChangeTab}
          className={this.props.props.activeId === 'home' ? 'active' : ''}
        >
          Home
        </button>
        <button
          id="about"
          onClick={this.props.props.handleChangeTab}
          className={this.props.props.activeId === 'about' ? 'active' : ''}
        >
          About
        </button>
        <button
          id="contact"
          onClick={this.props.props.handleChangeTab}
          className={this.props.props.activeId === 'contact' ? 'active' : ''}
        >
          Contact
        </button>
      </div>
    );
  }
}

export default TabSelector;
