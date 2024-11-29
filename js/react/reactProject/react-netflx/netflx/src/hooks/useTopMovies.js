import {useQuery} from '@tanstack/react-query';
import api from '../utils/api';

const fetchTopMovies = () => {
    return api.get(`/movie/top_rated?language=ko-KR&page=1`);    
    //'https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1';
}

export const useTopMovies = () => {
    return useQuery({
       queryKey: ['movie-top'] 
        , queryFn: fetchTopMovies
        , select: (result) => result.data
    });
}