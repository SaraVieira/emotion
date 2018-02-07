import { h } from 'preact';
import { Link } from 'preact-router/match';
import { css } from 'emotion';

const heading = css`
  float: left;
  margin: 0;
  padding: 0 15px;
  font-size: 24px;
  line-height: 56px;
  font-weight: 400;
  color: #fff;
`

const header = css`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 56px;
  padding: 0;
  background: #673ab7;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  z-index: 50;
`


const nav = css`
  float: right;
  font-size: 100%;
`

const link = css`
  display: inline-block;
  height: 56px;
  line-height: 56px;
  padding: 0 15px;
  min-width: 50px;
  text-align: center;
  background: rgba(255, 255, 255, 0);
  text-decoration: none;
  color: #fff;
  will-change: background-color;

  &:hover,
  &:active {
    background: rgba(0, 0, 0, 0.2);
  }
`

const active = css`
  background: rgba(0, 0, 0, 0.4);
`

const Header = () => (
  <header class={header}>
    <h1 class={heading}>Preact App</h1>
    <nav class={nav}>
      <Link class={link} activeClassName={active} href="/">
        Home
      </Link>
      <Link class={link} activeClassName={active} href="/profile">
        Me
      </Link>
      <Link class={link} activeClassName={active} href="/profile/john">
        John
      </Link>
    </nav>
  </header>
);

export default Header;
