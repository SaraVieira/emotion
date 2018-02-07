import { h } from 'preact';
import { css } from 'emotion';

const main = css`
  padding: 56px 20px;
  min-height: 100%;
  width: 100%;
`;

const Home = () => (
  <main class={main}>
    <h1>Home</h1>
    <p>This is the Home component.</p>
  </main>
);


export default Home
