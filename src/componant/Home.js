import Card from "./Card"
import '../App.css';
function Home() {
    return (
        <>

            <div className="container text-center">
                <div className="row">
                    <div className="col-12 col-md-4">
                    <Card shoe={"Jordan-4 B/W"} image={"https://raw.githubusercontent.com/YasinArafat2004/react-assets/main/black.jpg"} price={"2499 taka"}/>

                    </div>
                    <div className="col-12 col-md-4">
                    <Card shoe={"Travis Scott"} image={"https://raw.githubusercontent.com/YasinArafat2004/react-assets/main/travis scott.jpg"} price={"2299 taka"}/>

                    </div>
                    <div className="col-12 col-md-4">
                    <Card shoe={"Paris"} image={"https://raw.githubusercontent.com/YasinArafat2004/react-assets/main/paris.jpg"} price={"2199 taka"}/>

                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4">
                       <Card shoe={"Dior"} image={"https://raw.githubusercontent.com/YasinArafat2004/react-assets/main/Dior.jpg"} price={"2399 taka"}/>
                    </div>
                    <div className="col-12 col-md-4">
                       <Card shoe={"A1 Black High"} image={"https://raw.githubusercontent.com/YasinArafat2004/react-assets/main/A1 black high.jpg"} price={"2199 taka"}/>
                    </div>
                    <div className="col-12 col-md-4">
                       <Card shoe={"Blue Low"} image={"https://raw.githubusercontent.com/YasinArafat2004/react-assets/main/A1 blue low.jpg"} price={"1999 taka"}/>

                    </div>
                </div>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-12 col-md-4">
                    <Card shoe={"A1 Paste"} image={"https://raw.githubusercontent.com/YasinArafat2004/react-assets/main/A1 low paste.jpg"} price={"1999 taka"}/>

                    </div>
                    <div className="col-12 col-md-4">
                    <Card shoe={"Uni High"} image={"https://raw.githubusercontent.com/YasinArafat2004/react-assets/main/University Blue.jpg"} price={"2199 taka"}/>

                    </div>
                    <div className="col-12 col-md-4">
                    <Card shoe={"A1 Green"} image={"https://raw.githubusercontent.com/YasinArafat2004/react-assets/main/green low.jpg"} price={"1999 taka"}/>

                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4">
                       <Card shoe={"jorder 3"} image={"https://raw.githubusercontent.com/YasinArafat2004/react-assets/main/jordan 3 blackcat.jpg"} price={"2599 taka"}/>
                    </div>
                    <div className="col-12 col-md-4">
                       <Card shoe={"Jorder-4 blue"} image={"https://raw.githubusercontent.com/YasinArafat2004/react-assets/main/jordan 4 blue.jpg"} price={"2499 taka"}/>
                    </div>
                    <div className="col-12 col-md-4">
                       <Card shoe={"jorder-4 white"} image={"https://raw.githubusercontent.com/YasinArafat2004/react-assets/main/jorjan 4 white.jpg"} price={"2499 taka"}/>

                    </div>
                </div>
            </div>
            <div className="section2">
                <h1>Follow Us</h1>
                <a href="https://www.facebook.com/profile.php?id=61565291272973" target="_blank"><img className="img" src="https://raw.githubusercontent.com/YasinArafat2004/react-assets/main/images.png" alt="" /></a>
            </div>
        </>
    )
}



export default Home;