import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{

    renderList(){
        return this.props.books.map( (book) => {
            return (
                <li 
                    key = {book.title} 
                    onClick = { () => this.props.selectBook(book) }
                    className = 'list-group-item '>
                    { book.title }
                </li>
            )
        });
    }

    render () {
        return (
            <ul className = 'list-group col-sm-4'>
                {this.renderList()}
            </ul>
        );
    }

}

// IMP: here we are using the APP state (not the component state)
// The app State is defined by how we design our Reducers
function mapStateToProps(state){

    // Whatever is returned will show as props inside BookList
    return  {
        books: state.books 
    };
}

// Anything returned from this function will end up as props in the BookList container
function mapDispatchToProps(dispatch){
    // Whenever selecBook is called, the result has to be passed to all reducers
    // This is done by byndActionCreators.
    // In this case returns this.props.selectBook to the BookList container 
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Connect takes a function and a component and produces a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
