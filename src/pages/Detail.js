import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { number_format } from "../Helpers";
import fetchItem from "../redux/actions/itemAction";
import fetchItemDescription from "../redux/actions/itemDescriptionAction";
import styled from "@emotion/styled";
import Helmet from "react-helmet";

const Description = styled.article`
  @media only screen and (min-width: 600px) {
    margin-left: 32px;
  }

  margin-top: 64px;

  h2 {
    margin-bottom: 32px;
    font-size: 28px;
    font-weight: 500;
  }
  p {
    margin-top: 0px;
    margin-bottom: 32px;
    color: #666666;
    font-size: 16px;
  }
`;

const ShortDescription = styled.div`
  .image {
    text-align: center;
    img {
      max-width: 680px;
      width: 100%;
    }
  }

  @media only screen and (min-width: 600px) {
    padding-right: 32px;
  }

  h5 {
    margin-bottom: 16px;
    font-size: 14px;

    font-weight: 500;
  }
  h1 {
    font-size: 24px;
  }
  h4 {
    font-size: 46px;
    margin-bottom: 32px;
    margin-top: 32px;
    font-weight: 500;
  }
`;

const WrapperDetail = styled.section`
  padding-top: 32px;
`;

const Detail = () => {
  let { id } = useParams();
  const { info } = useSelector((state) => state.item);
  const { description } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItem(id));
    dispatch(fetchItemDescription(id));
  }, [dispatch, id]);

  return !!info ? (
    <>
      <Helmet>
        <title>{info.title}</title>

        <script type="application/ld+json">
          {`
    {
      "@context":"http://schema.org",
      "@type":"Product",
      "name":"${info.title}",
      "image":"${info.pictures[0].url}",
      "offers":{
         "@type":"Offer",
         "price":1399900,
         "priceCurrency":"COP"
      },
      "aggregateRating":{
         "@type":"AggregateRating",
         "ratingValue":"4.7",
         "ratingCount":10
      }
   }
    `}
        </script>

        <script type="application/ld+json">
          {`
    {
      "@context":"http://schema.org",
      "@type":"BreadcrumbList",
      "itemListElement":[
         {
            "@type":"ListItem",
            "position":1,
            "item":{
               "@id":"https://electronica.mercadolibre.com.co/",
               "name":"Electrónica, Audio y Video"
            }
         },
         {
            "@type":"ListItem",
            "position":2,
            "item":{
               "@id":"https://electronica.mercadolibre.com.co/televisores/",
               "name":"iPod"
            }
         },
         {
            "@type":"ListItem",
            "position":3,
            "item":{
               "@id":"https://electronica.mercadolibre.com.co/televisores/hyundai/",
               "name":"Reproductores"
            }
         },
         {
            "@type":"ListItem",
            "position":4,
            "item":{
               "@id":"https://electronica.mercadolibre.com.co/televisores/led/hyundai/",
               "name":"iPod Tourch"
            }
         },
         {
            "@type":"ListItem",
            "position":5,
            "item":{
               "@id":"https://electronica.mercadolibre.com.co/televisores/led/50-pulgadas/hyundai/",
               "name":"32 GB"
            }
         }
      ]
   }
    `}
        </script>
      </Helmet>
      <WrapperDetail className="card container">
        <ShortDescription className="row">
          <div className="col-7 col-xs-10 image">
            <img src={info.pictures[0].url} alt={info.title} />
          </div>
          <div className="col-3 col-xs-10">
            <h5>
              {info.condition === "new" ? "Nuevo" : "Usado"}{" "}
              {info.sold_quantity} Vendidos
            </h5>
            <h1>{info.title}</h1>
            <h4>$ {number_format(info.price)}</h4>
            <button className="btn-primary">Comprar</button>
          </div>
        </ShortDescription>
        <div className="row">
          <div className="col-10">
            <Description>
              <h2>Descripción del producto</h2>
              <p>{description.text}</p>
            </Description>
          </div>
        </div>
      </WrapperDetail>
    </>
  ) : null;
};
export default Detail;
