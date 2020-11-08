import React, { useState, useContext } from 'react';
import { ShowBookCard } from '../components/ShowBookCard';
import { useLocalStorage } from '../components/useLocalStorage';
import { GRSearch } from '../components/GRSearch';


export const GRSearchPage = () => {
  const [bookSelected, setBookSelected] = useLocalStorage ('bookList', null);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState( null );
  const books2obj = b => {alert('B2O ' + typeof b); return b.split(String.fromCharCode(7)).map(book => JSON.parse(book))};
  //const books2str = b => b.map(book => JSON.stringify(book)).join(String.fromCharCode(7));


  return (
    <>
    <form>
      <h3>GoodReads Search</h3>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={search}
          onChange={e => setSearch(e.target.value)} />
      </div>
      <button onClick={() => {
        setSearchResult = <GRSearch searchValue={search} numberOfBooks={3} />;
        alert(searchResult);
      }}>Submit</button>
    </form>


    <div className="booksList toSelect" style={{maxWidth: '450px'}}>
      {(searchResult !== null)
        ? searchResult.map(book =>
          <ShowBookCard
            book={book}
            chooseOne={() => {alert('ShowBookCard ' + typeof book); setBookSelected(book);}} key={book.id}
          />)
        : null
      }
    </div>
    <div className="booksList selected" style={{maxWidth: '450px'}}>
      {/*(bookSelected !== null)
        ? books2obj(bookSelected).map(book => <ShowBookCard book={book} />)
        : null
      */}
    </div>
    </>
  )
};

    /*
    const books2 = [{"id":3634639,"books_count":363,"ratings_count":765278,"text_reviews_count":23499,"original_publication_year":1965,"original_publication_month":6,"original_publication_day":"","average_rating":4.23,"best_book":{"id":44767458,"title":"Dune (Dune, #1)","author":{"id":58,"name":"Frank Herbert"},"image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555447414l/44767458._SX98_.jpg","small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555447414l/44767458._SY75_.jpg"}},{"id":3634570,"books_count":192,"ratings_count":134202,"text_reviews_count":4171,"original_publication_year":1969,"original_publication_month":10,"original_publication_day":"","average_rating":3.88,"best_book":{"id":44492285,"title":"Dune Messiah (Dune Chronicles, #2)","author":{"id":58,"name":"Frank Herbert"},"image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1577043824l/44492285._SY160_.jpg","small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1577043824l/44492285._SY75_.jpg"}},{"id":3634573,"books_count":151,"ratings_count":106333,"text_reviews_count":2378,"original_publication_year":1976,"original_publication_month":4,"original_publication_day":21,"average_rating":3.94,"best_book":{"id":44492286,"title":"Children of Dune (Dune Chronicles, #3)","author":{"id":58,"name":"Frank Herbert"},"image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1564783201l/44492286._SY160_.jpg","small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1564783201l/44492286._SY75_.jpg"}},{"id":551,"books_count":27,"ratings_count":56539,"text_reviews_count":258,"original_publication_year":1979,"original_publication_month":4,"original_publication_day":"","average_rating":4.36,"best_book":{"id":53764,"title":"The Great Dune Trilogy","author":{"id":58,"name":"Frank Herbert"},"image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1419962914l/53764._SX98_.jpg","small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1419962914l/53764._SY75_.jpg"}},{"id":3634588,"books_count":11,"ratings_count":67210,"text_reviews_count":1705,"original_publication_year":1981,"original_publication_month":5,"original_publication_day":6,"average_rating":3.86,"best_book":{"id":44439415,"title":"God Emperor of Dune (Dune Chronicles, #4)","author":{"id":58,"name":"Frank Herbert"},"image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1564025916l/44439415._SY160_.jpg","small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1564025916l/44439415._SY75_.jpg"}},{"id":3634575,"books_count":111,"ratings_count":54443,"text_reviews_count":1030,"original_publication_year":1984,"original_publication_month":4,"original_publication_day":1,"average_rating":3.87,"best_book":{"id":44492287,"title":"Heretics of Dune (Dune Chronicles, #5)","author":{"id":58,"name":"Frank Herbert"},"image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1564027750l/44492287._SY160_.jpg","small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1564027750l/44492287._SY75_.jpg"}},{"id":3634569,"books_count":8,"ratings_count":46264,"text_reviews_count":888,"original_publication_year":1985,"original_publication_month":4,"original_publication_day":"","average_rating":3.91,"best_book":{"id":44439416,"title":"Chapterhouse: Dune (Dune Chronicles, #6)","author":{"id":58,"name":"Frank Herbert"},"image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1564029233l/44439416._SY160_.jpg","small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1564029233l/44439416._SY75_.jpg"}},{"id":58336,"books_count":118,"ratings_count":22101,"text_reviews_count":1781,"original_publication_year":1962,"original_publication_month":"","original_publication_day":"","average_rating":3.91,"best_book":{"id":9998,"title":"The Woman in the Dunes","author":{"id":6526,"name":"Kōbō Abe"},"image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361254930l/9998._SX98_.jpg","small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361254930l/9998._SY75_.jpg"}},{"id":711892,"books_count":66,"ratings_count":21848,"text_reviews_count":510,"original_publication_year":1999,"original_publication_month":10,"original_publication_day":5,"average_rating":3.76,"best_book":{"id":761575,"title":"House Atreides (Prelude to Dune #1)","author":{"id":56,"name":"Brian Herbert"},"image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1403181106l/761575._SX98_.jpg","small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1403181106l/761575._SY75_.jpg"}},{"id":1278722,"books_count":51,"ratings_count":21173,"text_reviews_count":534,"original_publication_year":2002,"original_publication_month":10,"original_publication_day":3,"average_rating":3.69,"best_book":{"id":99219,"title":"The Butlerian Jihad (Legends of Dune, #1)","author":{"id":56,"name":"Brian Herbert"},"image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1505458671l/99219._SX98_.jpg","small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1505458671l/99219._SX50_.jpg"}},{"id":705993,"books_count":2,"ratings_count":12769,"text_reviews_count":54,"original_publication_year":2002,"original_publication_month":8,"original_publication_day":8,"average_rating":3.66,"best_book":{"id":719745,"title":"Hunting Harkonnens (Legends of Dune, #0.5)","author":{"id":56,"name":"Brian Herbert"},"image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1350161284l/719745._SY160_.jpg","small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1350161284l/719745._SY75_.jpg"}},{"id":4911,"books_count":37,"ratings_count":12702,"text_reviews_count":388,"original_publication_year":2006,"original_publication_month":4,"original_publication_day":"","average_rating":3.66,"best_book":{"id":20249,"title":"Hunters of Dune (Dune Chronicles, #7)","author":{"id":56,"name":"Brian Herbert"},"image_url":"https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png","small_image_url":"https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png"}},{"id":705946,"books_count":55,"ratings_count":15087,"text_reviews_count":276,"original_publication_year":2000,"original_publication_month":10,"original_publication_day":3,"average_rating":3.67,"best_book":{"id":20253,"title":"House Harkonnen (Prelude to Dune #2)","author":{"id":56,"name":"Brian Herbert"},"image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1403181168l/20253._SY160_.jpg","small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1403181168l/20253._SY75_.jpg"}},{"id":41917,"books_count":35,"ratings_count":10598,"text_reviews_count":392,"original_publication_year":2007,"original_publication_month":"","original_publication_day":"","average_rating":3.65,"best_book":{"id":42434,"title":"Sandworms of Dune (Dune Chronicles #8)","author":{"id":56,"name":"Brian Herbert"},"image_url":"https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png","small_image_url":"https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png"}},{"id":6229996,"books_count":36,"ratings_count":13201,"text_reviews_count":911,"original_publication_year":2009,"original_publication_month":6,"original_publication_day":16,"average_rating":3.44,"best_book":{"id":6054190,"title":"Dune Road","author":{"id":12915,"name":"Jane Green"},"image_url":"https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png","small_image_url":"https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png"}},{"id":705991,"books_count":47,"ratings_count":14271,"text_reviews_count":234,"original_publication_year":2001,"original_publication_month":10,"original_publication_day":2,"average_rating":3.69,"best_book":{"id":20252,"title":"House Corrino (Prelude to Dune #3)","author":{"id":56,"name":"Brian Herbert"},"image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298689043l/20252._SX98_.jpg","small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298689043l/20252._SY75_.jpg"}},{"id":69577204,"books_count":23,"ratings_count":1047,"text_reviews_count":206,"original_publication_year":2019,"original_publication_month":12,"original_publication_day":31,"average_rating":4.51,"best_book":{"id":44909230,"title":"999: The Extraordinary Young Women of the First Official Jewish Transport to Auschwitz","author":{"id":219648,"name":"Heather Dune Macadam"},"image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1567776673l/44909230._SX98_.jpg","small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1567776673l/44909230._SX50_.jpg"}},{"id":2081848,"books_count":39,"ratings_count":13021,"text_reviews_count":290,"original_publication_year":2003,"original_publication_month":9,"original_publication_day":19,"average_rating":3.76,"best_book":{"id":99218,"title":"The Machine Crusade (Legends of Dune, #2)","author":{"id":56,"name":"Brian Herbert"},"image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1412547890l/99218._SX98_.jpg","small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1412547890l/99218._SY75_.jpg"}},{"id":21444,"books_count":39,"ratings_count":11405,"text_reviews_count":249,"original_publication_year":2004,"original_publication_month":8,"original_publication_day":11,"average_rating":3.75,"best_book":{"id":99220,"title":"The Battle of Corrin (Legends of Dune, #3)","author":{"id":56,"name":"Brian Herbert"},"image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1317792692l/99220._SX98_.jpg","small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1317792692l/99220._SY75_.jpg"}},{"id":6248814,"books_count":4,"ratings_count":7431,"text_reviews_count":201,"original_publication_year":2009,"original_publication_month":8,"original_publication_day":4,"average_rating":3.78,"best_book":{"id":6072318,"title":"The Winds of Dune (Heroes of Dune #2)","author":{"id":56,"name":"Brian Herbert"},"image_url":"https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png","small_image_url":"https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png"}}];



    REACT_APP_API_KEY=DQ4OR5OKacE3IhLmDBA npm start

    `https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${searchText}`
    `https://www.goodreads.com/book/show/${bookId}?key=${apiKey}`
    `https://www.goodreads.com/book/show/${bookData.best_book.id}`

    curl "https://www.goodreads.com/search.xml?key=DQ4OR5OKacE3IhLmDBA&q=Dune"

    */
