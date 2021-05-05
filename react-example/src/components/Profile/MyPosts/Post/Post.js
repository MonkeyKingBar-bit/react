import classes from './Post.module.css';
const Post = (props) => {
    return (
                <div className={classes.item}>
                    <img src="https://i.pinimg.com/originals/56/6b/72/566b72dc326698bac79f39ee1212555e.jpg" alt="ava"/>
                    { props.message }
                    <div>
                        { props.like }
                    </div>
                </div>
    )
};

export default Post;