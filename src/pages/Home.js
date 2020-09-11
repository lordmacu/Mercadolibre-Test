import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import queryString from "query-string";
import fetchSearch from "../redux/actions/searchAction";
import { useDispatch } from "react-redux";
import Helmet from "react-helmet";
import ItemSearch from "../components/ItemSearch";

const Home = () => {
  const search = useSelector((state) => state.search);

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const searchGeneral = () => {
      const getParameters = queryString.parse(location.search);

      if (!!getParameters.search) {
        dispatch(fetchSearch(getParameters.search));
      }
    };
    searchGeneral();
  }, [dispatch,location]);

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
      <div className="container card">
        {!!search.result
          ? search.result.map((item) => {
              return <ItemSearch key={item.id} item={item} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Home;
