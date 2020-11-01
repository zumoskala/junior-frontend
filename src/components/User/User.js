import React, {Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username : 'zumoskala',
            items: [] };
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.state.username}`)
            .then(res => res.json())
            .then( data => this.setState({ items : data }) );
    }

    render() {

        const { items } = this.state;

        const styles = {
            userName: {
                textDecoration: 'none',
                color: '#000000',
                padding: '1.5rem 0',
                fontSize: '2rem',
                fontWeight: 'bold'
            },
            avatar: {
                width: '300px',
                height: '300px',
                borderRadius: '10px',
                boxShadow: '0px 0px 123px 8px rgba(0,0,0,0.3)'
            }
        }

        return (
            <div>
                <div className="userName" style={styles.userName}>{ items.login }</div>
                <div className="avatar">
                    <img style={styles.avatar} src={ items.avatar_url } />
                </div>
            </div>
        )
    }
}

export default User;
