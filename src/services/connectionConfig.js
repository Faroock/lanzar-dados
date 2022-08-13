import axios from "axios";

const supabase_url = process.env.SUPABASE_URL;
const supabase_key = process.env.SUPABASE_KEY;

const axiosConfig = axios.create({
    baseURL: supabase_url,
    headers: {
        'apikey': supabase_key,
        'Authorization': `Bearer ${supabase_key}`,
        'Content-Type': 'application/json',
    },
});

axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${supabase_key}`;
axiosConfig.defaults.headers.common['apikey'] = supabase_key;
axiosConfig.defaults.headers.common['Content-Type'] = 'application/json';

export { axiosConfig };