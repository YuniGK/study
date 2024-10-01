import Prop from './Prop';

const Home = () => {
   
    return (
        <div>
            <div className='black-nav'>
                <h2>Title</h2>
            </div>

            <div className='list'>
                <Prop name = 'yuni' age = '12' />
            </div>
        </div>
    );
};

export default Home;
