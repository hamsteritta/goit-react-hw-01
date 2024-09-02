import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
    return (
        <ul  className={css.FriendList}>
            {friends.map((friend) => {
                return <li><FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    id={friend.id}
                /></li>;
            })}
        </ul>
    );
};

function FriendListItem({ avatar, name, isOnline, id }) {
    const classNames = [css.FriendItemStatus];

  if (isOnline) {
		classNames.push(css.isOnline);
  } else {
      classNames.push(css.isOffline);
  }

    return (
        <div  className={css.FriendItem}>
            <img src={avatar} alt={name} width="48" />
            <p className={css.FriendItemName}>{name}</p>
            <p className={classNames.join(" ")}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    );
};