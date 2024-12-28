import { useState } from "react";
import TextInput from "../components/shared/TextInput";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";

const CreatePlaylistModal = ({ closeModal }) => {
    const [playlistName, setPlaylistName] = useState("");
    const [playlistThumbnail, setPlaylistThumbnail] = useState("");

    const createPlaylist = async () => {
        const response = await makeAuthenticatedPOSTRequest(
            "/playlist/create",
            { name: playlistName, thumbnail: playlistThumbnail, songs: [] }
        );
        if (response._id) {
            closeModal();
        }
    };

    return (
        <div
            className="absolute bg-black w-screen h-screen bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out"
            onClick={closeModal}
        >
            <div
                className="bg-app-black w-1/3 rounded-lg p-8 shadow-lg transform transition-transform duration-300 ease-in-out"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="text-white mb-5 font-semibold text-xl text-center">
                    Create Playlist
                </div>
                <div className="space-y-5 flex flex-col justify-center items-center">
                    <TextInput
                        label="Name"
                        labelClassName={"text-white text-lg"}
                        placeholder="Playlist Name"
                        value={playlistName}
                        setValue={setPlaylistName}
                    />
                    <TextInput
                        label="Thumbnail URL"
                        labelClassName={"text-white text-lg"}
                        placeholder="Thumbnail URL"
                        value={playlistThumbnail}
                        setValue={setPlaylistThumbnail}
                    />
                    <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 w-full sm:w-1/2 rounded-lg py-3 mt-6 text-white text-center font-semibold cursor-pointer transition-transform hover:scale-105 hover:shadow-xl"
                        onClick={createPlaylist}
                    >
                        Create
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePlaylistModal;
