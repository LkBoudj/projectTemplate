import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
    const error = useRouteError() as { statusText?: string; message?: string };

    return (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <h1>Oops! Something went wrong.</h1>
            <p>
                <strong>Error:</strong> {error?.statusText || error?.message || "Unknown error"}
            </p>
            <p>
                <a href="/">Go back to the homepage</a>
            </p>
        </div>
    );
};

export default ErrorPage;
