// Character.js
import React from 'react';
import {useAuth} from '@/hooks/auth'
import Image from 'next/image'

const Character = ({ characterPosition }) => {

    const { user } = useAuth({ middleware: 'auth' })

    const characterStyle = {
        transform: `translateX(${characterPosition}px)`, // Use translateX for smoother animations
    };

    if(!user){
        return <></>
    }

    return <div className="character z-20" style={characterStyle}>
        {user.profile_img && <Image width={100} height={200} src={user?.profile_img} alt={'user'}/>}
    </div>;
};

export default Character;
