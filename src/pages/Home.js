import React, { useEffect } from "react";
import { useLocation } from "react-router";

import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { number_format } from "../Helpers";
import queryString from "query-string";
import fetchSearch from "../redux/actions/searchAction";
import { useDispatch } from "react-redux";
import Helmet from "react-helmet";

import { useHistory } from "react-router-dom";

const SearchResults = styled.div`
  .item-result {
    padding-top: 17px;
    padding-bottom: 15px;

    img {
      cursor: pointer;
    }
    &::after {
      content: " ";
      background-color: #f6f6f6;
      height: 2px;
      width: 100%;
      display: block;
      width: 96%;
      margin: auto;
      position: relative;
      top: 15px;
    }

    &:last-child {
      &::after {
        height: 0px;
      }
    }

    .image-result {
      height: 180px;
      width: 180px;
      border-radius: 4px;
    }

    .description-price {
      .price {
        font-size: 24px;
        margin-bottom: 32px;
        line-height: 22px;
        margin-top: 18px;
        .transport {
          background-image: url(/assets/ic_shipping.png);
          width: 18px;
          height: 18px;
          display: inline-block;
          background-size: 18px;
          margin-left: 4px;
          top: 2px;
          position: relative;
        }
      }
      span {
        display: block;
      }
      .description {
        cursor: pointer;
        font-size: 18px;
      }
    }
    .city {
      margin-top: 42px;
      text-align: center;
      font-size: 12px;
      color: #666666;
    }
  }
`;

const Home = () => {
  const search = useSelector((state) => state.search);

  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const goToDeail = (id) => {
    history.push(`/items/${id}`);
  };

  const searchGeneral = () => {
    const getParameters = queryString.parse(location.search);

    if (!!getParameters.search) {
      dispatch(fetchSearch(getParameters.search));
    }
  };

  useEffect(() => {
    searchGeneral();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Mercado Libre</title>
        <script type="application/ld+json">{`
        {
          "@context": "http://schema.org",
          "@type": "Organization",
          "name" : "Mercadolibre",
          "url": "https://www.mercadolibre.com.ar",
          "logo": "https://http2.mlstatic.com/frontend-assets/ui-navigation/5.10.1/mercadolibre/logo__large_plus.png",
          "sameAs": [
            "https://www.facebook.com/mercadolibrecol",
          ],
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.mercadolibre.com.ar/items?search={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
        `}</script>
      </Helmet>
      <SearchResults className="container card">
        {!!search.result
          ? search.result.map((item) => {
              return (
                <div key={item.id} className="item-result row">
                  <div className="col-2 center-text">
                    <img
                      alt={item.title}
                      onClick={() => {
                        goToDeail(item.id);
                      }}
                      className="image-result"
                      src={item.thumbnail}
                    />
                  </div>
                  <div className="col-5 description-price">
                    <span className="price">
                      $ {number_format(item.price)}
                      {item.shipping.free_shipping ? (
                        <i className="transport"></i>
                      ) : null}
                    </span>
                    <span
                      className="description"
                      onClick={() => {
                        goToDeail(item.id);
                      }}
                    >
                      {item.title}
                    </span>
                  </div>
                  <div className="col-3 city">{item.address.state_name}</div>
                </div>
              );
            })
          : null}
      </SearchResults>
    </div>
  );
};

export default Home;
