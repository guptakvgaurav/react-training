/**
 * Created by ttn on 16/05/17.
 */
import fetch from 'isomorphic-fetch'

let fetchSearchContent = (query) => {
    return (dispatch) => {
        dispatch({type: 'fk.search.onStart', payload: ''})
        fetch(`https://api.github.com/search/users?q=${query}`)
            .then(json => {
                console.log('Users are ', json.length);
                this.setState({options: json.items})
            });
    }
};


export { fetchSearchContent };