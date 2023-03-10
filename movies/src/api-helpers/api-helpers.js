import axios from 'axios';
export const getAllMovies = async () => {
    const res = await axios.get("movie/")
        .catch((err) => console.log(err));
    if (res.status !== 200) {
        return console.log("No Data");
    }
    const data = await res.data;
    return data;
};

export const sendUserAuthRequest = async (data, signup) => {
    const res = await axios
        .post(`/user/${signup ? "signup" : "login"}`, {
            name: signup ? data.name : "",
            email: data.email,
            password: data.password
        }).catch((err) => console.log(err));
    if (res.status !== 200 && res.status !== 201) {
        console.log("Unexpected response");
    }
    const resData = await res.data;
    return resData;
};

export const sendAdminAuthRequest = async (data) => {
    const res = await axios
        .post("admin/login", {
            email: data.email,
            password: data.password
        }).catch(err => console.log(err));
    if (res.statusCode !== 200) {
        return console.log("Unexpected Error occured");
    }
    const resData = await res.data;
    return resData;
};
export const getMovieDetails = async (id) => {
    const res = await axios.get(`movie/${id}`).catch((err) => console.log(err));
    
    if (res.statusCode !== 200) {
        return console.error("Unexpected error");
    }
    const resData = await res.data;
    return resData;
}
export const newBooking = async (data) => {
    const res = axios
        .post('/booking', {
            movie: data.movie,
            seatNumber: data.seatNumber,
            date: data.date,
            user: localStorage.getItem('userId'),
        }).catch((err) => console.log(err));
    if (res.data !== 201) {
        return console.log("unexpected Error")
    }
    const resData = await res.data;
    return resData;
};

export const getUserBooking = async () => {
    const id = localStorage.getItem('userId');
    const res =  axios
        .get(`/user/bookings/${id}`)
        .catch((err) => console.log(err));
        if (res.data !== 200) {
            return console.log("unexpected Error")
        }
        const resData = await res.data;
        return resData;
    



}