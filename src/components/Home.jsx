import Hero from "./Hero";
import VIP from "./VIP";
import Tour from "./Tour";

const Home = ({vipCollection, vipDescription, tourDates}) => {
    return (
        <div>
            <Hero/>
            <VIP vipTiles={vipCollection} vipDescription={vipDescription}/>
            <Tour dates={tourDates}/>
        </div>
    )
}

export default Home;