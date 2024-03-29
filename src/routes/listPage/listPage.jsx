import { listData } from '../../lib/dummydata';
import Filter from '../../component/filter/Filter';
import Card from '../../component/card/Card';
import Map from '../../component/map/Map';

import './listPage.scss';

function ListPage() {
    const data = listData;

    return <div className="listPage">
        <div className="listContainer">
            <div className="wrapper">
                <Filter />
                {data.map(item => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
        <div className="mapContainer">
            <Map items={data} />
        </div>
    </div>;
}

export default ListPage;