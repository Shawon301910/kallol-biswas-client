import Header from "../../Section/Header/Header";
import About from "../../Section/About/About";
import Knowledge from "../../Components/Knowledge/Knowledge";


const Home = () => {


    return (
        <div>
            <Header />
            <Knowledge />
            <About />
            <div className="h-screen"></div>
        </div>
    );
};

export default Home;