import Link from 'next/link';
import './index.scss';
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
	return { stars: 'Somthing' };
};

export default Index;

/*

*/
