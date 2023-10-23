import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

interface ApiResponse<T> {
    data?: T;
    error?: string;
}

const axiosRequest = async <T>(config: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
        const response: AxiosResponse<T> = await axiosInstance(config);
        return { data: response.data, error: '' };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                console.error('Request error:', axiosError.response.data);
                return { data: undefined, error: (axiosError.response.data as string) };
            } else if (axiosError.request) {
                console.error('Request error:', axiosError.request);
                return { data: undefined, error: 'Request error' };
            } else {
                console.error('Request setup error:', axiosError.message);
                return { data: undefined, error: axiosError.message };
            }
        }
        return { data: undefined, error: 'Unknown error' };
    }
};

export default axiosRequest;
