import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div className="main">
            <div className="main__image">
                <img src="https://images.ctfassets.net/hrltx12pl8hq/6bi6wKIM5DDM5U1PtGVFcP/1c7fce6de33bb6575548a646ff9b03aa/nature-photography-pictures.jpg?fit=fill&w=800&h=300" alt="main-content"/>
            </div>
            <div className="ava">
                ava + description
                <img className="ava" src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" alt="ava"/>
                <div className="description">

                </div>
            </div>
            <MyPosts />
        </div>
    )
};

export default Profile;