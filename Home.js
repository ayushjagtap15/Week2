import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";

const focusCardsData = [
    {
        title: "Peaceful Piano",
        description: "Relax and indulge with beautiful piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1546&q=80",
    },
    {
        title: "Deep Focus",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1766&q=80",
    },
    {
        title: "Instrumental Study",
        description: "Focus with soft study music in the background.",
        imgUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
    },
    {
        title: "Focus Flow",
        description: "Up tempo instrumental hip hop beats",
        imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    },
    {
        title: "Beats to think to",
        description: "Focus with deep techno and tech house",
        imgUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    },
];

const Home = () => {
    return (
        <div className="h-screen w-full flex bg-gradient-to-b from-black via-gray-900 to-black">
            {/* Left Panel */}
            <div className="h-full w-1/5 bg-black text-white flex flex-col justify-between pb-10">
                <div>
                    <div className="logoDiv p-6">
                        <img src={spotify_logo} alt="spotify logo" width={125} />
                    </div>
                    <div className="py-5 space-y-3">
                        <IconText iconName="material-symbols:home" displayText="Home" active />
                        <IconText iconName="material-symbols:search-rounded" displayText="Search" />
                        <IconText iconName="icomoon-free:books" displayText="Library" />
                    </div>
                    <div className="pt-5 space-y-3">
                        <IconText iconName="material-symbols:add-box" displayText="Create Playlist" />
                        <IconText iconName="mdi:cards-heart" displayText="Liked Songs" />
                    </div>
                </div>
                <div className="px-5">
                    <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
                        <Icon icon="carbon:earth-europe-africa" />
                        <div className="ml-2 text-sm font-semibold">English</div>
                    </div>
                </div>
            </div>
            {/* Main Content */}
            <div className="h-full w-4/5 overflow-auto">
                {/* Navbar */}
                <div className="navbar w-full h-16 bg-black bg-opacity-30 flex items-center justify-end px-8">
                    <div className="w-1/2 flex h-full">
                        <div className="w-3/5 flex justify-around items-center text-gray-300">
                            <TextWithHover displayText="Premium" />
                            <TextWithHover displayText="Support" />
                            <TextWithHover displayText="Download" />
                            <div className="h-1/2 border-r border-gray-500"></div>
                        </div>
                        <div className="w-2/5 flex justify-around items-center">
                            <TextWithHover displayText="Sign up" />
                            <div className="bg-white text-black h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer hover:bg-gray-200">
                                Log in
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content */}
                <div className="content p-8 pt-0">
                    <PlaylistView titleText="Focus" cardsData={focusCardsData} />
                    <PlaylistView titleText="Spotify Playlists" cardsData={focusCardsData} />
                    <PlaylistView titleText="Sound of India" cardsData={focusCardsData} />
                </div>
            </div>
        </div>
    );
};

const PlaylistView = ({ titleText, cardsData }) => {
    return (
        <div className="text-white mt-8">
            <div className="text-2xl font-semibold mb-5">{titleText}</div>
            <div className="grid grid-cols-5 gap-4">
                {cardsData.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        description={item.description}
                        imgUrl={item.imgUrl}
                    />
                ))}
            </div>
        </div>
    );
};

const Card = ({ title, description, imgUrl }) => {
    return (
        <div className="bg-gray-800 bg-opacity-70 hover:bg-opacity-90 transition-all p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 duration-300">
            <div className="pb-4 pt-2">
                <img className="w-full rounded-md" src={imgUrl} alt={title} />
            </div>
            <div className="text-white font-semibold py-3">{title}</div>
            <div className="text-gray-400 text-sm">{description}</div>
        </div>
    );
};

export default Home;
