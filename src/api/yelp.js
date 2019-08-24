import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer TV3g6CqZorFxLyfRgbc6i_W8SHTxHxVLTvE7N21m1k44v4osfQDapm22cxCEZTpi0OtfJtnKWTAmFKO7J70Tub7qPuvqrJG9ON26gRqeCkO6Gj0FR0VqO8MUQrVeXXYx'
    }
});

