const YouTubeEmbed = ({url}) => {
    if (!url) {
        return;
    }

    return (
        <div className="video container">
            <div className="video-responsive">
                <iframe 
                    width="560"
                    height="315"
                    src={url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default YouTubeEmbed;
