import react from "react";

export default function Moderator(prop){
    const {moderator} = prop;
    return(
        <div>
             {moderator && moderator.map((moderators, index) => (
          <div key={index}>
            <h2>{moderators.modId}</h2>
          </div>
        ))}
        </div>
    )
}