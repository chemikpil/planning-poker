import React from 'react';

class Settings extends React.Component {
  render () {
    return (
      <div id="settings" className="footer">
        <span className="settings__label">t-shirt</span>
        <label className="settings__input">
          <input type="checkbox" id="type" name="type" value="tshirt" />
          <span className="settings__input__controll"></span>
        </label>
        <span className="settings__label">fibonacci</span>
      </div>
    );
  }
}

export default Settings;