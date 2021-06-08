import information from "../components/Header/icon/information.svg";
import portfolio from "../components/Header/icon/portfolio.svg";
import events from "../components/Header/icon/events.svg";
import vacancies from "../components/Header/icon/vacancies.svg";
import leaderboard from "../components/Header/icon/leaderboard.svg";

let initialState = {
    navbarItem: [
        {id: 1, src: information, item: 'Информация', link: '/'},
        {id: 2, src: portfolio, item: 'Портфолио', link: '/portfolio'},
        {id: 3, src: events, item: 'Мероприятия', link: '/events'},
        {id: 4, src: vacancies, item: 'Вакансии', link: '/vacancies'},
        {id: 5, src: leaderboard, item: 'Рейтинг', link: '/rating'}
    ]
}

const HeaderReducer = (state = initialState, action) => {
    return state;

}


export default HeaderReducer;