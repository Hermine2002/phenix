import "./App.css";
import Routers from "./Routes/Routes";
import MouseFollower from "./components/MouseFollower";
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import enTranslation from './locales/en.json';
import ruTranslation from './locales/ru.json';
import amTranslation from './locales/am.json';
import { Modal } from "antd";
import { FaCircleUser } from "react-icons/fa6";
import { useState } from "react";
import RegistrationModal from "./components/RegistrationModal";

i18next.init({
    lng: 'en',
    resources: {
        en: {
            translation: enTranslation
        },
        ru: {
            translation: ruTranslation
        },
        am: {
            translation: amTranslation
        }
    }
});

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    return (
        <>

            <div className="min-h-screen bg-gray-800 flex items-center justify-center register-form-wrapper">
                <button
                    onClick={handleOpenModal}
                    className="px-4 py-2 bg-purple-500 text-white rounded"
                >
                    <FaCircleUser
                        className="text-3xl text-purple-900 mb-4"
                    />
                </button>
                {isModalOpen && <RegistrationModal onClose={handleCloseModal} />}
            </div>
            <I18nextProvider i18n={i18next}>
                <MouseFollower/>
                <Routers/>
            </I18nextProvider>
        </>
    );
}

export default App;
