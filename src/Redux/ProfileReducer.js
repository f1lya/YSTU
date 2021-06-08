let initialState = {
    information: [
        {id: 1, src: 1, item: 'Студент'},
        {id: 2, src: 2, item: 'Пефрильев Вадим Сергеевич'},
        {id: 3, src: 3, item: 'Институт цифровых систем'},
        {id: 4, src: 4, item: 'Информационные системы и технологии'},
        {id: 5, src: 5, item: 'ЭИС-24'},
    ],

    skills: [
        {id: 1, icon: 1, name: 'Web'},
        {id: 2, icon: 2, name: 'Design'},
        {id: 3, icon: 3, name: 'Languages'}
    ],

    completedEvents: [
        {name: 'Мероприятие №1'},
        {name: 'Мероприятие №2'},
        {name: 'Мероприятие №3'}
    ]
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-SKILL':
            return {
                ...state,
                skills: [...state.skills, {
                    id: 4,
                    icon: 4,
                    name: 'Test',
                }],
            };
        default:
            return {...state};
    }
}

export const addPostActionCreator = () => ({type: 'ADD-SKILL'});

export default ProfileReducer;