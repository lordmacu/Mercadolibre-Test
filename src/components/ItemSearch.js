import React from "react";

import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import { number_format } from "../Helpers";

const ItemResult= styled.div`
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
`

const ItemSearch = ({ item }) => {
  const history = useHistory();

  const goToDeail = (id) => {
    history.push(`/items/${id}`);
  };

  return (
    <ItemResult key={item.id} className="item-result row">
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
          {item.shipping.free_shipping ? <i className="transport"></i> : null}
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
    </ItemResult>
  );
};
export default ItemSearch;
