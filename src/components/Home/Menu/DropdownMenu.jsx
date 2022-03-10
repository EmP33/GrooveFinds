import React from "react";

import classes from "./DropdownMenu.module.scss";

import styled from "styled-components";

const Menu = ({ showModal }) => {
  const MenuItem = styled.div`
    border-radius: 0.5rem;
    margin: 0;
    position: absolute;
    transition: all 5s;
    left: ${showModal ? "-5rem" : "10rem"};
    z-index: 15;
    background: #fff;
    padding: 0;
    top: -3rem;
    -webkit-box-shadow: 2px 2px 5px 0px var(--color-primary);
    -moz-box-shadow: 2px 2px 5px 0px var(--color-primary);
    box-shadow: 2px 2px 5px 0px var(--color-primary);

    & ul {
      margin-top: 3rem;
      list-style: none;
      font-size: 1.2rem;
      padding: 0 0.2rem 0 0.2rem;

      & li {
        cursor: pointer;
        border-bottom: 2px solid var(--color-grey-dark-2);
        padding: 0.5rem 2rem 0.5rem 2rem;
        margin: 1rem;

        &:hover,
        &:active {
          border-bottom: 2px solid var(--color-thertiary);
          color: var(--color-primary);
          background-color: var(--color-grey-light-3);
        }
      }
    }
  `;

  return (
    <MenuItem>
      <ul>
        <li>Dom i ogród</li>
        <li>Elektronika</li>
        <li>Zabawki</li>
        <li>Zegarki</li>
        <li>On</li>
        <li>Ona</li>
        <li>Biżuteria</li>
        <li>Gry wideo</li>
      </ul>
    </MenuItem>
  );
};

export default Menu;
