import React from 'react';
import Link from 'next/link';
import styled, {css} from 'styled-components';

const Title = styled.h1`color: red;`;
const Button = styled.button`
	background-color: ${(props) => (props.primary ? 'red' : 'white')};
	color: yellow;
`;
const MyButton = styled(Button)`
  color:magenta;
  `;

const myCss = css`color:red`;
const Nav = () => {
	return (
		<div css = {myCss}>
			
    Sushant
			<Title>Test</Title>
			<MyButton>Click me</MyButton>
		</div>
	);
};

export default Nav;
/*
// const links = [
//   { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
// ].map(link => {
//   link.key = `nav-link-${link.href}-${link.label}`
//   return link
// })
<nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
*/
