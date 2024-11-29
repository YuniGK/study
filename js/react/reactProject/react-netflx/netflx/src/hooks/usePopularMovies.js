import {useQuery} from '@tanstack/react-query';
import api from '../utils/api';

const fetchPopularMovies = () => {
    return api.get(`/movie/popular?language=ko-KR&page=1`);    
    //'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1'
}

export const usePopularMoviesQuery = () => {
    return useQuery({
       queryKey: ['movie-popular'] 
       //, queryFn: () => {}
        , queryFn: fetchPopularMovies
        , select: (result) => result.data//필요한 데이터만 가져온다.
    });
}