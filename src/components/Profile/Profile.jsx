import style from "./Profile.module.css";
export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={style.containerWrap}>
      <div className={style.wrap}>
        <div className={style.logoMine}>
          <img src={image} alt="User avatar" />
        </div>
        <p className={style.accName}>{name}</p>
        <p className={style.accInfo}>{tag}</p>
        <p className={style.accInfo}>{location}</p>
      </div>
      <ul className={style.ulProfile}>
        <li className={style.liProfile}>
          <span>Followers</span>
          <span className={style.accMedia}>{followers}</span>
        </li>
        <li>
          <span>Views</span> <span className={style.accMedia}>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={style.accMedia}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
