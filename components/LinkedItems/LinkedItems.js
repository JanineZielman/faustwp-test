import Link from 'next/link';

export default function LinkedItems({ props }) {
  return (
    <div className='linked-items'>
      {props?.map((post, i) => {
        return(
          <div className="linked-item">
            <Link href={`/posts/${post.slug}`}>
              <a>
                {post.categories &&<div className='category'>{post.categories.nodes[0].name}</div>}
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
