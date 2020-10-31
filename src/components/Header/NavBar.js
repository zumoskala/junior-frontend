import React, {Component} from 'react'

class NavBar extends Component {

    render() {
        // nav link dummy:
        let url = '#';

        //navigation bar elements are children of a div with display flex to display them in the same row
        const styles = {
            navigation_bar: {
                width: '70%',
                float: 'right'
            },
            navigation_list: {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                listStyle: 'none',
            },
            navigation_item : {
                marginLeft: 'auto'
            },
            navigation_link: {
                textDecoration: 'none',
                color: '#000000',
                padding: '2rem 0 2rem 2rem',
                fontSize: '1.2rem',
                fontWeight: 'bold'
            }
        }

        return (
            <div className="navigation_bar" style={styles.navigation_bar}>
                <ul className="navigation_list" style={styles.navigation_list}>
                    <li style={styles.navigation_item}><a style={styles.navigation_link} href={url}>Start</a></li>
                    <li><a style={styles.navigation_link} href={url}>My Profile</a></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;

