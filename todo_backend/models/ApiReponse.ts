type StatusCode = 200 | 201 | 301 | 304 | 400 | 401 | 403 | 404 | 500;

interface ApiResponse {
    success?: boolean;
    message?: string;
    statusCode?: StatusCode;
    data?: any;
}

export default ApiResponse;