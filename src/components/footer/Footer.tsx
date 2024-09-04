import style from "./footer.module.css"
const Footer =() => {
    return (
        <div className={style.container}>
            <div className={style.logo}>manga</div>
            <div className={style.text}>All rights reserved.</div>
        </div>
    );
}

export default Footer