import React, {useEffect, useState} from 'react';

const Page = () => {
  const [authors, setAuthors] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();


  const fetchData = () => {
    fetch( 'https://apriatst.artez.nl/wp-json/wp/v2/ppma_author?per_page=25' )
      .then( res => {
        setTotalPages(res.headers.get( 'x-wp-totalpages' ));
        setCurrentPage(currentPage + 1)

        return res.json();
      } )
      .then( res => {
        setAuthors(res);
      } )
      .catch( error => console.log( error ) );
  };
  
  const loadMore = () => {
    setCurrentPage(currentPage + 1)
    fetch(
      `https://apriatst.artez.nl/wp-json/wp/v2/ppma_author?per_page=25&page=${
        currentPage
      }`
    )
    .then( res2 => {
      return res2.json();
    } )
    .then( res2 => {
      setAuthors([...authors, ...res2]);
    } )
    .catch( error => console.log( error ) );
    
    if ( currentPage >= totalPages ) {
      document.getElementById('load').disabled = true;
    }
  }
  
  useEffect(() => {
    fetchData();
  }, [])


  console.log(currentPage)

  return (
    <div>
      {authors.map((author, i) => {
        return(
          <div>
            {author.name}
          </div>
        )
      })}
      <button id="load" onClick={loadMore}>Load More</button>
    </div>
  )
}


export default Page
