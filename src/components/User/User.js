import React, {Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'username',
            avatar: 'avatar'
        }
    }

    render() {
        const styles = {
            userName: {
                textDecoration: 'none',
                color: '#000000',
                padding: '1.5rem 0',
                fontSize: '1.5rem',
                fontWeight: 'bold'
            },
            avatar: {
                width: '350px',
                height: '350px',
                border: '2px solid black',
                borderRadius: '10px'
            }
        }

        return (
            <div>
                <div className="userName" style={styles.userName}>LOGIN</div>
                <div className="avatar" style={styles.avatar}>
                    <p>{this.state.username}</p>
                </div>
            </div>
        )
    }
}

export default User;
