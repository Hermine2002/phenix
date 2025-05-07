import "./App.css";
import Routers from "./Routes/Routes";
import MouseFollower from "./components/MouseFollower";
import {useTranslation, I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import enTranslation from './locales/en.json';
import ruTranslation from './locales/ru.json';
import amTranslation from './locales/am.json';

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
    return (
        <I18nextProvider i18n={i18next}>
            <MouseFollower/>
            <Routers/>
        </I18nextProvider>
    );
}

export default App;
