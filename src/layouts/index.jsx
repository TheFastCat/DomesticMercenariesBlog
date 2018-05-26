import React from 'react';
import Helmet from 'react-helmet';
import '../assets/scss/init.scss';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="layout">
        <Helmet defaultTitle="Domestic Mercenaries Blog" meta={[
              { name: 'keywords', content: 'Domestic Mercenaries, home services, time management, save time, home cleaning' }
            ]} />
        {children()}
      </div>
    );
  }
}

export default Layout;
