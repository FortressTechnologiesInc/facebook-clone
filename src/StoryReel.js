import React from 'react';
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png"
                profileSrc="https://www.pngarts.com/files/5/User-Avatar-PNG-Image.png"
                title="Somanath Goudar"
            />

            <Story 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4NFdzXEsVzvBPGjkrSePQa-8XFuNtQ&usqp=CAU"
                profileSrc="https://www.pngarts.com/files/5/User-Avatar-PNG-Image.png"
                title="Vishwa Math"
            />

            <Story 
                image="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                profileSrc="https://www.pngarts.com/files/5/User-Avatar-PNG-Image.png"
                title="Yamaha Bunker"
            />

            <Story 
                image="https://cellularnews.com/wp-content/uploads/2020/04/Delete-photo-337x600.jpg"
                profileSrc="https://www.pngarts.com/files/5/User-Avatar-PNG-Image.png"
                title="Srinivas Kulkarni"
            />

            <Story 
                image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/Facebook-Stories-exist-for-a-maximum-of-24-hours.png"
                profileSrc="https://www.pngarts.com/files/5/User-Avatar-PNG-Image.png"
                title="Sujay Gonal"
            />
            
        </div>
    )
}

export default StoryReel
