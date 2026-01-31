const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    switch (statusCode) {
        case 400:
            res.status(statusCode).json({ title: "Validation failed", message: err.message, stackTrace: err.stack })
            break;
        case 401:
            res.status(statusCode).json({ title: "Unauthorized", message: err.message, stackTrace: err.stack })
            break;
        case 403:
            res.status(statusCode).json({ title: "Forbidden", message: err.message, stackTrace: err.stack })
            break;
        case 404:
            res.status(statusCode).json({ title: "Not found", message: err.message, stackTrace: err.stack })
            break;
        case 500:
        default:
            res.status(statusCode).json({ title: "Server error", message: err.message, stackTrace: err.stack })
            break;
    }
}

module.exports = errorHandler;