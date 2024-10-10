import Header from "../../Section/Header/Header";
import About from "../../Section/About/About";
import Knowledge from "../../Components/Knowledge/Knowledge";
import Services from "../../Section/Servieces/Services";
import MySkill from "../../Section/MySkill/MySkill";


const Home = () => {


    return (
        <div>
            <Header />
            <Knowledge />
            <About />
            <Services />
            <MySkill />
            <div className="w-full h-screen"></div>
        </div>
    );
};

export default Home;