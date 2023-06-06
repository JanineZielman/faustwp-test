import React, {useEffect, useState} from 'react';

const Page = () => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    async function fetchAuthors() {
      const response = await fetch(`https://apriatst.artez.nl/wp-json/wp/v2/ppma_author?per_page=100`);
      const jsonData = await response.json();
      setAuthors(jsonData)
    }
    fetchAuthors()
    
  }, [])

  console.log(authors)

  return (
    <div>
      {authors.map((author, i) => {
        return(
          <div>
            {author.name}
          </div>
        )
      })}
    </div>
  )
}


export default Page
