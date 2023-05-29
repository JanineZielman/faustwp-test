import Link from 'next/link';

export default function LinkedItems({ props, subject, year }) {
  return (
    <div className='linked-items'>
      {props?.map((post, i) => {
        const category = post.categories?.nodes[0].name.toLowerCase().replaceAll(' ', '_')
        return(
          <div className="linked-item">
            <Link href={`/posts/${post.slug}?&category=${category}&year=${year}&subject=${subject?.toLowerCase().replaceAll(' ', '_')}`}>
              <a>
                {/* {post.categories &&<div className='category'>{post.categories.nodes[0].name}</div>} */}
                {post.featuredImage &&
                  <img src={post.featuredImage?.node.mediaItemUrl}/>
                }
                <h1 className='title'>{post.title}</h1>
              </a>
            </Link>
          </div>
        )
      })}
    </div>
  );
}
