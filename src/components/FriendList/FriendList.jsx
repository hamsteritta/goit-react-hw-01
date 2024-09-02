import css from "./FriendList.module.css";
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
    return (
        <ul  className={css.FriendList}>
            {friends.map((friend) => {
                return <li key={friend.id}><FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    id={friend.id}
                /></li>;
            })}
        </ul>
    );
};

