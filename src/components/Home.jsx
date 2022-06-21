import Hero from "./Hero";
import VIP from "./VIP";
import Tour from "./Tour";
import ShowDescription from "./ShowDescription";

const Home = ({vipCollection, vipDescription, tourDates, showDescription}) => {
    return (
        <div>
            <Hero/>
            <ShowDescription showDescription={showDescription} />
            <VIP vipTiles={vipCollection} vipDescription={vipDescription}/>
            <Tour dates={tourDates}/>
        </div>
    )
}

export default Home;