import "./BackGroundVideo.css"

const BackGroundVideo = () => {
    return ( 
        <div className="back-ground">
            <video src="./videos/Cafe.mp4" className="background" autoPlay loop muted/>  
        </div>

     );
}
 
export default BackGroundVideo;