let initialState = {
    eventsAll: [
        {id: 1, type: 'Dev', img: 'img1', name: 'Test Dev Event'},
        {id: 2, type: 'Lang', img: 'img2', name: 'Test Lang Event'},
        {id: 3, type: 'Design', img: 'img3', name: 'Test Design Event'},
        {id: 4, type: 'Dev', img: 'img4', name: 'Test Dev Event'}
    ]
}

const EventsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default EventsReducer;