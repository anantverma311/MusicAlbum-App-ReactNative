import React , {Component} from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { Albums: []};

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState( {Albums: response.data}));
    }

    renderAlbums(){
       return this.state.Albums.map(Albums => 
       <AlbumDetail key = {Albums.title} Albums={Albums} />
       );
    }

    render(){
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
};

export default AlbumList ;