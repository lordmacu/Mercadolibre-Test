import React, { useEffect, useState } from "react";
import logo from "../assets/Logo_ML.png";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import fetchSearch from "../redux/actions/searchAction";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import queryString from "query-string";
import { cleanItem } from "../redux/actions/itemAction";
 
const NavSearch = styled.form`
  padding: 8px 1px 0px 27px;
  overflow: auto;
  height: 55px;
  position: relative;
  z-index: 910;
  will-change: left;
  -webkit-transition: left 0.15s ease-out;
  transition: left 0.15s ease-out;
  input {
    height: 39px;
    padding: 7px 60px 9px 15px;
    border-radius: 2px;
    background-color: #fff;
    border: 0 rgba(0, 0, 0, 0.2);
    color: #333;
    font-size: 18px;
    width: 100%;
    margin: 0;
    font-family: inherit;
    border-radius: 4px;
    &:focus {
      border: 0 rgba(0, 0, 0, 0.2);
    }
    &::placeholder {
      color: #999999;
      opacity: 1;
    }

    &:-ms-input-placeholder {
      color: #999999;
    }

    &::-ms-input-placeholder {
      color: #999999;
    }
  }
  button {
    background-image: none;
    height: 39px;
    padding-top: 2px;
    cursor: pointer;
    border-radius: 0 2px 2px 0;
    width: 42px;
    border: 0 rgba(0, 0, 0, 0.2);
    background-color: #eeeeee;
    top: 0px;
    right: 40px;
    position: relative;
    &:hover {
      background-color: #eeeeeec2;
    }

    .search {
      background-image: url(/assets/ic_Search.png);
      width: 18px;
      height: 18px;
      background-size: 18px;
      background-repeat: no-repeat;
      background-position: center;
      margin: auto;
    }

    position: absolute;
    right: 0px;
    top: 8px;
  }
`;

const Breadcrumbs = styled.section`
  padding-bottom: 8px;
  padding-top: 8px;
  ul {
    li {
      margin-right: 5px;
      color: #999999;
      font-size: 14px;
      display: inline;
      font-weight: 400;

      line-height: 32px;
      &::after {
        content: " ";
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWBAMAAAA2mnEIAAAAMFBMVEUAAACZmZmVlZWdnZ2ZmZmXl5ebm5uZmZmYmJiampqZmZmZmZmZmZmZmZmZmZn///8qenpPAAAAD3RSTlMABQwNFBYXgMLExdPV2ei5krlTAAAAAWJLR0QPGLoA2QAAADJJREFUGNNjYKAMMBYh2CwnFBCc6MkINutOAySJxQg2270ErGwkzch6kYSR7UJ2A7kAAKGRCuuzYkoBAAAAAElFTkSuQmCC")
          no-repeat;
        padding-left: 5px;
        width: 10px;
        height: 20px;
        background-size: 20px;
        display: inline-block;
        position: relative;
        top: 6px;
      }
      &:last-child {
        font-weight: 600;
        &::after {
          background: none;
        }
      }
    }
  }
`;

const HeaderGeneral = styled.nav`
  background-color: #ffe600;
  .inner-header {
    display: flex;
    .search {
      width: 100%;
    }
    .logo {
      cursor: pointer;
      padding-top: 10px;
    }
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  
  const [query, setQuery] = useState("");

  const history = useHistory();

  const goToHome = (id) => {
    dispatch(cleanItem(null));
    history.push(`/`);
  };

  useEffect(() => {
    const getParameters = queryString.parse(location.search);
    if (!!getParameters.search) {
      setQuery(getParameters.search);
    }
  }, []);

 
  return (
    <>
      <HeaderGeneral>
        <nav className="container">
          <div className="inner-header row">
            <div
              className="logo"
              onClick={() => {
                goToHome();
              }}
            >
              <img src={logo} alt="Mercado Libre" />
            </div>
            <div className="search">
              <NavSearch
                onSubmit={(event) => {
                  dispatch(fetchSearch(query));
                  goToHome();
                  event.preventDefault();
                }}
                className="nav-search"
              >
                <input
                  type="text"
                  required="required"
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                  }}
                  className="nav-search-input"
                  placeholder="Buscar productos, marcas y más…"
                />
                <button
                  type="button"
                  onClick={() => {
                    dispatch(fetchSearch(query));
                    goToHome();
                  }}
                  className="nav-search-btn"
                >
                  <div aria-label="Buscar" className="search"></div>
                </button>
              </NavSearch>
            </div>
          </div>
        </nav>
      </HeaderGeneral>
      <Breadcrumbs className="container pl-0">
        <ul>
          <li>Electrónica, Audio y Video</li>
          <li>iPod</li>
          <li>Reproductores</li>
          <li>iPod Tourch</li>
          <li>32 GB</li>
        </ul>
      </Breadcrumbs>
    </>
  );
};
export default Header;
