import {useQuery} from '@tanstack/react-query';
import api from '../utils/api';

const fetchMovieGenre = () => {
    return api.get(`/genre/movie/list?language=ko`);    
    //'https://api.themoviedb.org/3/genre/movie/list?language=en'
}

export const useMovieGenreQuery = () => {
    return useQuery({
       queryKey: ['movie-genre'] 
        , queryFn: fetchMovieGenre
        , select: (result) => result.data.genres
        , staleTime: 8.64e+7//1번만 호출하면 될 수 있도록 설정
    });
}