import Link from 'next/link';
import './index.scss';
import axios from 'axios';

function Index(props) {
	// console.log(props);
	console.log('Client:', props.stars);
	return (
		
		<div>
			<Link href="/about">
				<a>About Page</a>
			</Link>
			<p>Hello Next.js</p>
			<p>Next stars:{props.stars.name}</p>
		</div>
	);
}
Index.getInitialProps = async ({ req }) => {

	const x = 0;
	let d: any = {};
	if (req) {
		d = await axios.get('http://localhost:3002');
		console.log(d.data);
	}
	return { stars: d.data };
};

export default Index;

/*

*/
