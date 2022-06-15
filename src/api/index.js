import axios from "axios"


export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng
            },
            headers: {
                'X-RapidAPI-Key': 'fe7a3a5adbmsh09e1d6c41947f78p168270jsnd17f444ac7d0',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        })
        return data
    } catch (error) {
        console.log(error)
    }

}

export const getWeatherData = async (lat, lng) => {
    try {
        const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/weather', {
            params: {
                lat: lat, lon: lng
            },
            headers: {
                'X-RapidAPI-Key': 'fe7a3a5adbmsh09e1d6c41947f78p168270jsnd17f444ac7d0',
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
            }
        })
        return data
    } catch (error) {
        console.log(error)
    }
}