import React from 'react';

function Blogs({ blogs }) {
    return <div>
        <h1>Blogs by Sushant</h1>
        {Object.keys(blogs).map((cat, index) => {
            return <div key={index}>
                <div style={{ textTransform: 'capitalize' }}>{cat}</div>
                {blogs[cat].map((obj, index) => {
                    return <div key={index}>
                        &nbsp;&nbsp;&nbsp;&nbsp;<a style={{fontSize:'1rem', lineHeight:'1rem'}} href={`/blog/${obj.slug}`}>{obj.title}</a>
                    </div>
                })}
            </div>
        })}
    </div>
}

export default Blogs