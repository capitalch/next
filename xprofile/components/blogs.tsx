import React from 'react';

function Blogs({ blogs }) {
    return <div>
        <h1>Blogs by Sushant</h1>
         	{blogs.map((x, index) => {
            return (
                <div key={index}>
                    <a href={`/blog/${x.slug}`}>
                        {x.title}
                    </a>
                </div>
            );
        })}
    </div>
}

export default Blogs