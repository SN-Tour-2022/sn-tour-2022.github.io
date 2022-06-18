import {ReactComponent as BlackSN} from '../svgs/blacksn.svg'
const VIPTile = ({vipTitle, vipFeatures, price}) => {
    let features = [];

    for (let i = 0; i < vipFeatures.length; i++) {
        features.push(
            <li className="vip-feature" key={[i]}>{vipFeatures[i]}</li>
        )
    }
    return (
        <section className="vip-tile">
            <div className="vip-tile-heading">
                <BlackSN className="vip-tile-svg"/>
                <h3>{vipTitle}</h3>
            </div>
            <ul className="vip-tile-features">
                {features}
            </ul>

            <div className="vip-tile-price">{price}</div>
        </section>
    )
}

export default VIPTile;