import React from 'react';
import Link from 'next/link';
// import Router, { withRouter } from 'next/router';

export default () => {
	return (
		<div>
			<div>This is index page</div>
      <Link  href='/allposts' as='/allposts' >
				<a>
					posts
				</a>
			</Link>			
		</div>
	);
};

/*
<a href="#" onClick={() => (location.href = '/posts')}>
				Posts
			</a>
	{<Link  href='/blogs/posts' >
				<a>
					posts
				</a>
			</Link>}
<ul>
    <li>
      <Link href='/b' as='/a'>
        <a>a</a>
      </Link>
    </li>
    <li>
      <Link href='/a' as='/b'>
        <a>b</a>
      </Link>
    </li>
    <li>
      <Link href={{ pathname: '/posts', query: { id: '2' } }} as='/posts/2'>
        <a>post #2</a>
      </Link>
    </li>
  </ul>
*/
