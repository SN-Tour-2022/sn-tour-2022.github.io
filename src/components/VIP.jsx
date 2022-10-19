import VIPTile from "../partials/VIPTile";

const VIPDescription = ({vipDescription}) => {
    return (
        <div className="vip-conditions">
            <h4>{vipDescription.vipDescriptionTitle}</h4>
            <p>{vipDescription.content}</p>
        </div>
    )
}

const VIPTiles = ({vipTiles}) => {
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
        <div className="vip-packages">
            {tiles}
        </div>
    )
};

const VIP = ({vipTiles, vipDescription}) => {
    if (vipTiles !== null && vipDescription !== null) {
        console.log(vipTiles)
        return (
            <section className="vip container">
                <h2>VIP Packages</h2>

                {vipTiles !== null &&
                    <VIPTiles vipTiles={vipTiles} />
                }

                {vipDescription !== null &&
                    <VIPDescription vipDescription={vipDescription} />
                }
            </section>
        )
    } else {
        return;
    }
}

export default VIP;