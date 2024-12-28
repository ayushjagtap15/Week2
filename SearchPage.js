import { useState } from "react";
import LoggedInContainer from "../containers/LoggedInContainer";
import { Icon } from "@iconify/react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import SingleSongCard from "../components/shared/SingleSongCard";

const SearchPage = () => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [songData, setSongData] = useState([]);

    const searchSong = async () => {
        const response = await makeAuthenticatedGETRequest(
            "/song/get/songname/" + searchText
        );
        setSongData(response.data);
    };

    return (
        <LoggedInContainer curActiveScreen="search">
            <div
                className="w-full py-8 px-5 min-h-screen"
                style={{
                    background: "linear-gradient(135deg, #1e293b, #0f172a)",
                }}
            >
                {/* Search Bar */}
                <div
                    className={`w-full md:w-1/2 lg:w-1/3 mx-auto p-4 text-base rounded-full bg-gray-800 flex text-white items-center space-x-3 transition-all ${
                        isInputFocused
                            ? "border-2 border-green-500 shadow-lg"
                            : "border border-gray-600"
                    }`}
                >
                    <Icon icon="ic:outline-search" className="text-2xl" />
                    <input
                        type="text"
                        placeholder="What do you want to listen to?"
                        className="w-full bg-transparent focus:outline-none text-white text-lg"
                        onFocus={() => setIsInputFocused(true)}
                        onBlur={() => setIsInputFocused(false)}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                searchSong();
                            }
                        }}
                    />
                </div>

                {/* Search Results */}
                {songData.length > 0 ? (
                    <div className="pt-10">
                        <div className="text-white text-xl font-semibold">
                            Showing search results for
                            <span className="text-green-400"> {searchText}</span>
                        </div>
                        <div className="pt-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {songData.map((item) => (
                                <SingleSongCard
                                    info={item}
                                    key={JSON.stringify(item)}
                                    playSound={() => {}}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-gray-400 text-center pt-10 text-lg">
                        Nothing to show here. Try searching for a song.
                    </div>
                )}
            </div>
        </LoggedInContainer>
    );
};

export default SearchPage;
