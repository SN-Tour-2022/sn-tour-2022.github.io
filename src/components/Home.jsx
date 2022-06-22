import Hero from "./Hero";
import VIP from "./VIP";
import Tour from "./Tour";
import ShowDescription from "./ShowDescription";
import YouTubeEmbed from './YouTubeEmbed';

const Home = ({vipCollection, vipDescription, tourDates, showDescription, youtube}) => {
    return (
        <div>
            <Hero/>
            <ShowDescription showDescription={showDescription} />
            <YouTubeEmbed url={showDescription.youtubeUrl} />
            <VIP vipTiles={vipCollection} vipDescription={vipDescription}/>
            <Tour dates={tourDates}/>
        </div>
    )
}

export default Home;