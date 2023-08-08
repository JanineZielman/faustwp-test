import { Collapsible } from "../Collapsible";

export default function Filter({ path, categories, category, tags, tag, title, year, authors, allAuthors}) {

  function generateYearsBetween(startYear = 2019, endYear) {
    const endDate = endYear || new Date().getFullYear();
    let years = [];
  
    for (var i = startYear; i <= endDate; i++) {
      years.push(startYear);
      startYear++;
    }
    return years;
  }

  const yearsArray = generateYearsBetween(2019);

  function titleSearch() {
    var filter = document.getElementById("titleSearch").value.toLowerCase();
    window.location.href = `${path}&title=${filter}`
  }

  function authorSearch() {
    var input, filter, authors, a, i, txtValue;
    input = document.getElementById("authorInput");
    filter = input.value.toUpperCase();
    authors = document.getElementById("author-list");
    a = authors.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
  }

  function tagSearch() {
    var input, filter, tags, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    tags = document.getElementById("tag-list");
    a = tags.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
  }

  return (
    <div className='filter'>
      <div className='filter-cat'>
      <Collapsible trigger="Author" idname={'Author'}>
          <div className="title-search">
          <input type="text" id="authorInput" onKeyUp={authorSearch} placeholder="Search for authors.." title="Type in an author"/>
        </div>
          <div className="tag-list" id="author-list">
            {allAuthors?.map((author, i) => {
              return(
                <a key={`author${i}`} className={`small-title ${author.toLowerCase().replaceAll(' ', '-')}`} href={`${path}&authors=${author.toLowerCase().replaceAll(' ', '-')}`}>{author}</a>
              )
            })}
          </div>
        </Collapsible>
        {authors &&
          <>
          {Array.isArray(authors) ?
          <>
            {authors?.map((item, i) => {
              return(
                <div className='small-title' key={`authorsitem${i}`}>
                  <div className="text">{item}</div> <a href={`${path.replace(`&authors=${item}`, '')}`}>x</a>
                </div>
              )
            })}
          </>
          :
            <div className='small-title'>
              <div className="text">{authors}</div> <a href={`${path.replace(`&authors=${authors}`, '')}`}>x</a>
            </div>
          }
          </>   
        }
      </div>
      <div className='filter-cat'>
        <div className="small-title title-cat">Title</div>
        {title ?
          <div className='small-title'>
            <div className="text">{title.replaceAll('-', ' ')}</div> <a href={`${path.replace(`&title=${title}`, '')}`}>x</a>
          </div>
        :
        <div className="title-search">
          <input type="text" id="titleSearch" placeholder="Search for titles.." title="Type in a title"/>
          <div className="search-button" onClick={titleSearch}>Search</div>
        </div>
        }
      </div>
      <div className='filter-cat'>
        <Collapsible trigger="Category" idname={'category'}>
          {categories.map((category, i) => {
            return(
              <a key={`category${i}`} className={`small-title ${category.name.toLowerCase().replace(' ', '-')}`} href={`${path}&category=${category.name.toLowerCase().replace(' ', '-')}`}>{category.name}</a>
            )
          })}
        </Collapsible>
        {category &&
          <>
          {Array.isArray(category) ?
          <>
            {category?.map((item, i) => {
              return(
                <div key={`categoryItem${i}`} className='category left'>
                  {item} <a href={`${path.replace(`&category=${item}`, '')}`}>x</a>
                </div>
              )
            })}
          </>
          :
          <div className='category left'>
            {category} <a href={`${path.replace(`&category=${category}`, '')}`}>x</a>
          </div>
          }
          </>   
        }
      </div>
      <div className='filter-cat'>
        <Collapsible trigger="Year" idname={'year'}>
          {yearsArray.map((year, i) => {
            return(
              <a key={`year${i}`} className={`small-title year${year}`} href={`${path}&year=${year}`}>{year}</a>
            )
          })}
        </Collapsible>
    
        {Array.isArray(year) ?
            year.map((item,i) => {
              return(
                <div className='small-title' key={`yearitem${i}`}>
                  <div className="text">{item}</div> <a href={`${path.replace(`&year=${item}`, '')}`}>x</a>
                </div>
              )
            })
          :
          <>
          {year &&
            <div className='small-title'>
              <div className="text">{year}</div> <a href={`${path.replace(`&year=${year}`, '')}`}>x</a>
            </div>
          }
          </>
        }
      </div>
      <div className='filter-cat'>
        <Collapsible trigger="Tags" idname={'tags'}>
          <div className="title-search">
          <input type="text" id="myInput" onKeyUp={tagSearch} placeholder="Search for tags.." title="Type in a tag"/>
        </div>
          <div className="tag-list" id="tag-list">
            {tags?.map((tag, i) => {
              return(
                <a key={`tag${i}`} className={`small-title ${tag.name.toLowerCase().replace(' ', '-')}`} href={`${path}&tag=${tag.name.toLowerCase().replace(' ', '-')}`}>{tag.name}</a>
              )
            })}
          </div>
        </Collapsible>
        {tag &&
          <>
          {Array.isArray(tag) ?
          <>
            {tag?.map((item, i) => {
              return(
                <div className='tag' key={`tagitem${i}`}>
                  {item} <a href={`${path.replace(`&tag=${item}`, '')}`}>x</a>
                </div>
              )
            })}
          </>
          :
          <div className='tag'>
            {tag} <a href={`${path.replace(`&tag=${tag}`, '')}`}>x</a>
          </div>
          }
          </>   
        }
      </div>
    </div>
  );
}
