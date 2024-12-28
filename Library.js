import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoggedInContainer from "../containers/LoggedInContainer";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";

const Library = () => {
    const [myPlaylists, setMyPlaylists] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest(
                "/playlist/get/me"
            );
            setMyPlaylists(response.data);
        };
        getData();
    }, []);

    return (
        <LoggedInContainer curActiveScreen={"library"}>
            <div className="text-white text-2xl pt-8 font-bold">
                My Playlists
            </div>
            <div className="py-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {myPlaylists.map((item) => (
                    <Card
                        key={item._id}
                        title={item.name}
                        description=""
                        imgUrl={item.thumbnail}
                        playlistId={item._id}
                    />
                ))}
            </div>
        </LoggedInContainer>
    );
};

const Card = ({ title, description, imgUrl, playlistId }) => {
    const navigate = useNavigate();
    return (
        <div
            className="bg-gradient-to-b from-gray-800 to-black w-full p-4 rounded-lg cursor-pointer hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
            onClick={() => {
                navigate("/playlist/" + playlistId);
            }}
        >
            <div className="pb-4 pt-2">
                <img
                    className="w-full h-40 object-cover rounded-md"
                    src={imgUrl}
                    alt={title}
                />
            </div>
            <div className="text-white font-semibold py-2 text-lg">
                {title}
            </div>
            {description && (
                <div className="text-gray-400 text-sm">{description}</div>
            )}
        </div>
    );
};

export default Library;
