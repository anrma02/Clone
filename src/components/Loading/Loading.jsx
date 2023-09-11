import loading from '~/components/Loading/loading.gif';
import './Loading.scss';

const load = { loading: loading, name: 'Loading gif' };
function Loading() {
    return (
        <div className="loading ">
            <img src={load.loading} alt={load.name} />
        </div>
    );
}

export default Loading;
