import css from "./Profile.module.css";

export default function Profile({
    name,
    tag,
    image,
    location,
    stats
}) {
  return (
   <div className={css.profile}>
    <div>
      <img className={css.profileAvatar} src={image} alt={name} />
      <p className={css.profileName}>{name}</p>
      <p className={css.profileTag}>@{tag}</p>
      <p className={css.profileLocation}>{location}</p>
    </div>

    <ul className={css.profileStats}>
      <li>
        <span>Followers</span>
        <span>{stats.followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{stats.views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{stats.likes}</span>
      </li>
    </ul>
  </div>
  );
};