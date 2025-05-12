import "./App.css";
import Routers from "./Routes/Routes";
import MouseFollower from "./components/MouseFollower";
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import enTranslation from './locales/en.json';
import ruTranslation from './locales/ru.json';
import amTranslation from './locales/am.json';
import { Modal } from "antd";
import RegisterForm from "./components/RegisterForm";
import { FaCircleUser } from "react-icons/fa6";
import { useState } from "react";

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
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="absolute bottom-[20px] right-[40px] cursor-pointer" onClick={() => setOpen(true)}>
                <FaCircleUser 
                className="text-3xl text-purple-900 mb-4"
                />
            </div>

            <Modal
                open={open}
                footer={null}
                centered
                onClose={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                styles={{body: {paddingTop: '30px', }}}
            >
                <RegisterForm />
            </Modal>
            <I18nextProvider i18n={i18next}>
                <MouseFollower/>
                <Routers/>
            </I18nextProvider>
        </>
    );
}

export default App;
