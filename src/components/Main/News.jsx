import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';

class News extends Component {
  render() {
    return (
				<div className="page news-page" id="news">
					<div className="row">
						<div className="left-col padding-left-50">
              <a name="news"></a>
							<div className="news-title">Новости</div>
						</div>
						<div className="right-col padding-right-40 text-right">
							<a href="#" className="transparent-button">Все новости</a>
						</div>
					</div>
					<div className="row">
						<ul className="news-list">
							<li>
								<a href="#">
                  <img src="/assets/img/news-01.png" alt="news-01" />
									<div className="news-overlay">Браслет - незаменимый гаджет для ежедневных покупок</div>
								</a>
							</li>
							<li>
								<a href="#">
                  <img src="/assets/img/news-02.png" alt="news-02" />
									<div className="news-overlay">Браслет - незаменимый гаджет для ежедневных покупок</div>
								</a>
							</li>
							<li>
								<a href="#">
                  <img src="/assets/img/news-03.png" alt="news-03" />
									<div className="news-overlay">Браслет - незаменимый гаджет для ежедневных покупок</div>
								</a>
							</li>
							<li>
								<a href="#">
                  <img src="/assets/img/news-04.png" alt="news-04" />
									<div className="news-overlay">Браслет - незаменимый гаджет для ежедневных покупок</div>
								</a>
							</li>
							<li>
								<a href="#">
                  <img src="/assets/img/news-01.png" alt="news-05" />
									<div className="news-overlay">Браслет - незаменимый гаджет для ежедневных покупок</div>
								</a>
							</li>
							<li>
								<a href="#">
                  <img src="/assets/img/news-02.png" alt="news-06" />
									<div className="news-overlay">Браслет - незаменимый гаджет для ежедневных покупок</div>
								</a>
							</li>
						</ul>
					</div>
        </div>
    );
  }
}

export default News;
