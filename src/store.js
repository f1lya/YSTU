import information from './components/Header/icon/information.svg'
import portfolio from './components/Header/icon/portfolio.svg'
import events from './components/Header/icon/events.svg'
import vacancies from './components/Header/icon/vacancies.svg'
import leaderboard from './components/Header/icon/leaderboard.svg'
import ProfileReducer from "./Redux/ProfileReducer";

let store = {
    _state: {
        header: {
            navbarItem: [
                {src: information, item: 'Информация', link: '/'},
                // {src: skills, Item: 'Навыки', link: '/skills'},
                {src: portfolio, item: 'Портфолио', link: '/portfolio'},
                {src: events, item: 'Мероприятия', link: '/events'},
                {src: vacancies, item: 'Вакансии', link: '/vacancies'},
                {src: leaderboard, item: 'Рейтинг', link: '/rating'}
            ]
        },

        profile: {
            skills: [
                {id: 1, icon: 1, name: 'Web'},
                {id: 2, icon: 2, name: 'Design'},
                {id: 3, icon: 3, name: 'Languages'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profile = ProfileReducer(this._state.profile, action)
        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;

