import {useQuery} from '@tanstack/react-query';
import api from '../utils/api';

const fetchUpcomingMovies = () => {
    return api.get(`/movie/upcoming?language=ko-KR&page=1`);    
    //'https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1'
}

export const useUpcomingMovies  = () => {
    return useQuery({
       queryKey: ['movie-upcoming'] 
        , queryFn: fetchUpcomingMovies
        , select: (result) => result.data
    });
}