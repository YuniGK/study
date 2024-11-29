import {useQuery} from '@tanstack/react-query';
import api from '../utils/api';

const fetchSearchMovie = ({keyword, page}) => {
    return keyword ? 
        api.get(`/search/movie?query=${keyword}&include_adult=false&language=ko-KR&page=${page}`)
        : api.get(`/movie/popular?language=ko-KR&page=${page}`);
}
// 'https://api.themoviedb.org/3/search/movie?query=marvel&include_adult=false&language=en-US&page=1';


export const useSearchMovieQuery = ({keyword, page}) => {
    return useQuery({
       //queryKey: ['search-movie', keyword, page] 
       queryKey: ['search-movie', {keyword, page}]
        , queryFn: () => fetchSearchMovie({keyword, page})
        , select: (result) => result.data
    });
}