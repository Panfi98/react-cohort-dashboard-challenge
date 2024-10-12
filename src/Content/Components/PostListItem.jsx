import { useContext, useEffect, useState } from "react";
import ProfileCircle from "../../Helper/profileCircle";
import { ContentContext } from "../../Helper/Contex";

export default function PostListItem({element, users}){
    const [id, setId] = useState(element.contactId)
    const [user, setUser] = useState(users.find(user => user.id === id));

    const [initials, setInitials] = useState(user ? 
        `${user.firstName.charAt(0) + user.lastName.charAt(0)}` : 
        "user not loaded");

    const [color, setColor] = useState(user? 
        user.favouriteColour:
        '#FFFFFF'
    )


    return(
        <li>
            <div className="single-post">
                <ProfileCircle initials={`${initials}`} color={color}>

                </ProfileCircle>
            </div>
        </li>
    )
}