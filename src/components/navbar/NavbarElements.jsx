import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background-color: #131924;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

export const NavLink = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  display: flex;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  height: 80px;

  &.active {
    color: #1888ff;
  }

  &:hover {
    color: #1888ff;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 44px;
    right: 10px;
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  margin-right: 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
