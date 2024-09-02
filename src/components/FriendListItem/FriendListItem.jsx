import css from "../FriendList/FriendList.module.css";

export default function FriendListItem({ avatar, name, isOnline, id }) {
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