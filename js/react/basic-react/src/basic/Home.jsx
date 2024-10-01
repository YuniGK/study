import { Link } from 'react-router-dom';
//npm i react-router-dom
import Prop from './Prop';
const Home = () => {
   
    return (
        <div>
            <div className='black-nav'>
                <h2>Title</h2>
            </div>

            <div className='list'>
                <Prop name = 'yuni' age = '12' />

                <Link to = {
                    {
                        pathname : "/param/10"
                    }
                }>
                    param 전송(path variable)
                </Link>
            </div>
        </div>
    );
};

export default Home;
