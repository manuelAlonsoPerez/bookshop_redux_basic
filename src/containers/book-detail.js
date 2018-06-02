import React, {Component} from 'react';
import {connect} from 'react-redux';

 class BookDetail extends Component{

    render(){
        
        if(!this.props.book){
            return <div>Please select a book to get started.</div>
        }
        return(
            <div>
                <h3> Details for: </h3>
                <div> title: {this.props.book.title} </div>
                <div> pages: {this.props.book.pages} </div>
            </div>
        );    
    }
    
}

function mapStateToProps(state){

    // Whatever is returned will show as props inside BookList
    return  {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);