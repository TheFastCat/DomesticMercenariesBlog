import React from 'react';
import './style.scss';
import '../../assets/fonts/fontello-771c82e0/css/fontello.css';

class Links extends React.Component {
  render() {
    const author = this.props.data;
    const links = {
      facebook: author.facebook,
      instagram: author.instagram,
      pinterest: author.pinterest,
      url: author.url,
      rss: author.rss,
      email: author.email
    };

    return (
      <div className="links">
        <a href={`${links.url}`}>DomesticMercenaries.com</a>
        <ul className="links__list">
          <li className="links__list-item">
            <a href={`https://www.facebook.com/${links.facebook}`} alt="our Facebook url" rel="noopen">
              <i className="icon-facebook" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://www.instagram.com/${links.instagram}`} alt="our Instagram url" rel="noopen">
              <i className="icon-instagram" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://www.pinterest.com/${links.pinterest}`} alt="our pinterest url" rel="noopen">
              <i className="icon-pinterest" />
            </a>
          </li>
        </ul>
        <ul className="links__list">
          <li className="links__list-item">
            <a href={`mailto:${links.email}`} alt="our email address">
              <i className="icon-mail" />
            </a>
          </li>
        </ul>
        <ul className="links__list">
          <li className="links__list-item">
            <a href={links.rss} alt="our rss feed">
              <i className="icon-rss" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links;
