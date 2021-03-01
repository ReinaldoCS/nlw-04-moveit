import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import style from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={style.profileContainer}>
            <img src="https://instagram.fcgh4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/74611907_751538422029786_4284722158321532928_n.jpg?_nc_ht=instagram.fcgh4-1.fna.fbcdn.net&_nc_ohc=vEEQ8XPqrl8AX9oJHNj&tp=1&oh=1b6d32ddfe04a748e322a2d3a748d609&oe=6060D1E4" alt="Reinaldo Correia"/>
            <div>
                <strong>Reinaldo Correia</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}