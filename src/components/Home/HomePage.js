import videoHomePage from "../../assets/video-homepage.mp4";

const HomePage = () =>{
    
    return (
        <div className="homepage-container">
            <div className="content">
                <video autoPlay muted loop>
                    <source src={videoHomePage} type="video/mp4"/>
                </video>
            </div>
            
        </div>
    )
}


export default HomePage;