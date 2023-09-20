import { useEffect, useState } from 'react';
import Loading from '~/components/Loading';

function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true);
        }, 3000);
    }, []);
    return (
        <div className="text-white">
            <div className="text-white"> Home Page</div>
            {isLoading ? <Loading /> : <div>ss</div>}
            <div />
        </div>
    );
}

export default Home;
