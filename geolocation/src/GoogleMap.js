import React, { useEffect } from "react";

function GoogleMap(lat, lng){
    useEffect(()=>{
        const ifameData=document.getElementById("iframeId")
        let latitude=47.5110927;
        let longitude=19.0339754;
        ifameData.src=`https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;&output=embed`
    },[lat,lng])
    return(
        <div>
            <iframe id="iframeId" height="500px" width="100%"></iframe>
        </div>
    );
}
export default GoogleMap;