const initialState = {
    weather: {}
}

const weatherReducer = (state = initialState, action) => {
    switch(action.type){
        case('GET_WEATHER'): {
            const newWeather = action.weather;
            console.log('Reducer - Weather: ' + newWeather.name);
            return {
                ...state,
                weather: newWeather
            }
        }
        default: 
            return state;
    }
}
export default weatherReducer;