/**
 * sandbox play with array functions based on Jonas Schmedtmann's
 * The Ultimate React Course 2023: React, Redux & More
 * 
 * Of interest: Sorting strings 
 */

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}


/**
 * examples of destructuring objects
 */
function testDestructuring() {
  const book1 = getBook(1)
  const {title, author, genres} = book1
  console.log(title, author, genres)

  // the ... in assignment is "rest"
  const [firstGen, secondGen, ...remaingingGen] = genres
  console.log(firstGen, " and ",  secondGen, " the remainging are ", remaingingGen)

  //  the ... is "spread"
  const newGenres = [...genres, "old-school"]
  newGenres;

  //we add a new field, and modify a new field
  const modifiedBook = {...book1, movieDate: "12-19-2001", pages: 1299}
  modifiedBook;
}//testDestructuring()

// optional chains and null-coalesing operator
//book 3 does not have libraryanything, but the optional chain spits out undefined,
//and the ?? operator will default to returning the right argument (zero)
function testShortCircut () {

  const book = getBook(3)
  const goodReadsReviewCount = book?.reviews?.goodreads?.reviewsCount ?? 0
  console.log(goodReadsReviewCount)
  const librarythingReviewsCount = book?.reviews?.librarything?.reviewsCount ?? 0
  console.log(librarythingReviewsCount)

  const totalReviews = goodReadsReviewCount+librarythingReviewsCount
  totalReviews

}//testShortCircut()


function mapPlay() {
  const books = getBooks()
  const titles = books.map( (book) => {
    return book.title
  })
  console.log(titles)

  const essentialData = books.map(  (book) =>{
      const data = { title: book.title,
                      author: book.author }
      return data
  })
  console.log(essentialData)

  
}//mapPlay() 


//playing with book page counts
function filterPlay() {

  const books = getBooks()

  //shrink the books object to title and page number (to easily see the play with filter)
  const bookData = books.map( (book) => {
    return {title: book.title, pageCount: book.pages}
  })
  console.log(bookData)

  const shortReads = books.filter(  (book)=> book.pages>900 )
  //view just titles of the short read books
  console.log(shortReads.map( (b) => b.title))


  const specialBooks = books
      .filter( (book)=> book.pages>600 )
      .filter( (book)=> book.hasMovieAdaptation )
  //view title of all books that meet critera
  console.log(specialBooks.map( (b) => b.title))


  const adventureBooks = books.filter( (bk) => bk.genres.includes("novel"))
  console.log(adventureBooks.map(b =>b.title))


}//filterPlay()

function reducePlay() {

  const books = getBooks()
  const totalPages = books.reduce( (acc, book) =>{
    return acc + book.pages
  },0)
  console.log(totalPages)

}//reducePlay()


//sort mutates the original array, so we make a copy through slice()
function sortPlay() {
  const x = [ 11, 1, 6, 2, 99, 3, 100, 31]
  const ascending = x.slice().sort( (a,b)=>{ return a-b })
  const decending = x.slice().sort( (a,b)=>{ return b-a })
  console.log(ascending)
  console.log(decending)
  console.log(x)

  const books = getBooks()
  const sortedByPageCountAscending = books.slice().sort( (a,b) => {return a.pages-b.pages})
  console.log(sortedByPageCountAscending.map(b=>b.pages))
  console.log(sortedByPageCountAscending.map(b=>b.title))

  //sorting strings
  const sortedTitlesAscending = books.slice().sort( (a,b) =>{
    return ('' + a.title).localeCompare(b.title);
  })
  console.log(sortedTitlesAscending.map(b=>b.title))

  const sortedTitlesDecending = books.slice().sort( (a,b) =>{
    return -1*('' + a.title).localeCompare(b.title);
  })
  console.log(sortedTitlesDecending.map(b=>b.title))
}sortPlay()