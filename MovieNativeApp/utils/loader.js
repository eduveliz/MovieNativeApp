import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export const spinLoader = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <CircularProgress size={100}/>
        </div>
    )
};