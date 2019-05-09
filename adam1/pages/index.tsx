import Link from 'next/link';
import './index.scss';
import axios from 'axios';

function Index({ stars }) {
	return (
		<div>
			<Link href="/about">
				<a>About Page</a>
			</Link>
			<p>Hello Next.js</p>
			<p>Next stars:{stars}</p>
		</div>
	);
}
Index.getInitialProps = async ({ req }) => {
	const x = 0;
	let data:any = {};
	if (req) {
		data = await axios.get('http://localhost:3002');
	}
	return { stars: JSON.stringify(data.data) };
};

export default Index;

/*

*/
