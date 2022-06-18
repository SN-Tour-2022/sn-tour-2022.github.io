import VIPTile from "../partials/VIPTile";

const VIP = ({vipTiles, vipDescription}) => {
    let tiles = []

    for (let i = 0; i < vipTiles.length; i++) {
        tiles.push(
            <VIPTile 
                key={[i]}
                vipTitle={vipTiles[i].vipTitle}
                vipFeatures={vipTiles[i].vipFeatures}
                price={vipTiles[i].vipPricing}
            />
        )
    }

    return (
        <section className="vip container">
            <h2>VIP Packages</h2>

            <div className="vip-packages">
                {tiles}
            </div>

            <div className="vip-conditions">
                <h4>{vipDescription.vipDescriptionTitle}</h4>
                <p>{vipDescription.content}</p>
            </div>
        </section>
    )
}

export default VIP;