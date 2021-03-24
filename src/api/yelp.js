import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer mvjzb5oeRGP0jOUr5UBLTkzS9XvsmyRYVmQlS2JA46YLDDiBdHCZ3uYk6SXMCUTRYDD4bC-1iGgVPdMbUwUu2Zd0rwrVnbRd69ugyLBLhPhjSfutRbNVQ5XNJo5aYHYx'
    }
});