import Link from 'next/link';
import './index.scss';
const Index = () => (
	<div>
		<Link href="/about">
			<a>About Page</a>
		</Link>
		<p>Hello Next.js</p>
	</div>
);

export default Index;
