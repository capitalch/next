import React from 'react';
import css from 'styled-jsx/css';
// import styles from './nav.module.scss';
// import './nav.css';

const Nav = () => {
	const myColor = 'pink';
	const styleJsx = css`
		.hero {
			width: 100%;
			color: red;
		}
		.mow {
			color: pink;
		}
	`;
	return (
		<div>
			<div className="hero">
				<div className="mow">test1</div>
				test
			</div>
			<style jsx>{`styleJsx`}</style>
		</div>
	);
};

export default Nav;
/*

*/
