// Movie Type
export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    vote_average: number;
    release_date: string;
    genre_ids: number[];
}

// Genre Type
export interface Genre {
    id: number;
    name: string;
}

// User Type
export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
}

// Response Type for Movies API
export interface MoviesResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

// Response Type for Genre API
export interface GenresResponse {
    genres: Genre[];
}

// Favorite Movie Slice State Type
export interface FavoriteMoviesState {
    favorites: Movie[];
}

// Search Query Response Type
export interface SearchQueryResponse {
    results: Movie[];
    page: number;
    total_pages: number;
    total_results: number;
}

// Redux Store RootState Type
export interface RootState {
    user: User;
    favorites: FavoriteMoviesState;
}

// Props for MovieList component
export interface MovieListProps {
    movies: Movie[];
    onMovieHover: (movie: Movie | null) => void;
    onClick: (movie: Movie) => void;
}

// Props for GenreFilter component
export interface GenreFilterProps {
    onGenreSelect: (genreId: number | null) => void;
}

// Props for SearchBar component
export interface SearchBarProps {
    onSearch: (query: string) => void;
}

// Props for User Profile component
export interface UserProfileProps {
    user: User;
    favorites: Movie[];
}
export interface UserState {
    name: string;
    email: string;
    avatar: string;
}

export interface MovieResponse {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    vote_average: number;
    release_date: string;
    genre_ids: number[];
}

export interface FavoriteMoviesState {
    favorites: Movie[];
}

export interface FavoriteMovie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    vote_average: number;
    release_date: string;
    genre_ids: number[];
}

export interface FavoriteMovieResponse {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    vote_average: number;
    release_date: string;
    genre_ids: number[];
}

  export interface FavoritesState {
    favorites: Movie[];
  }
  
 export interface FavoriteButtonProps {
    movie: {
        id: number;
        title: string;
        poster_path: string;
        overview: string;
        vote_average: number;
        release_date: string;
        genre_ids: number[];
    };
  }

export interface FavoriteButton{
    movie: {
        id: number;
        title: string;
        poster_path: string;
        overview: string;
        vote_average: number;
        release_date: string;
        genre_ids: number[];
    };
    onClick: () => void;
}

export interface SearchBarProps {
    onSearch: (query: string) => void;
    }

export interface  ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
    }
    