//Purpose of this component is to render a list of books

import React, { Component } from 'react';
import { connect } from 'react-redux';
//importing the action creator
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return(
                <li 
                    key={book.title} 
                    onClick= {() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
                );
        });
    }
    
    render(){
        return (
                <ul className="list-group col-sm-4">
                    {this.renderList()}
                </ul>
            );
    }
}
// This takes our state, array of books and active book
// & returns returns props inside of BookList (this.props)
function mapStateToProps (state) {
    return {
        books: state.books
    };
}
//Anything returned from this function will end up as props
//on the BookList container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result should be passed 
    //to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}
//Promote BookList form a component to a container - it needs to know
//about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps) (BookList);