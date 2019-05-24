import React from 'react';

function Layout(props) {
	return (
		<div>
            <span>Some ingredients</span>
			{props.children}
		</div>
	);
}

// Layout.getInitialProps = async () => {
// 	const content = (await require(`../docs/pages/home.md`)).default;
// 	return {content};
// }

export default Layout;