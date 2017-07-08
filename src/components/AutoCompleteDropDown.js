import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

// http://www.material-ui.com/#/components/auto-complete
export default class AutoCompleteDropDown extends Component {
    state = {
        searchText: '',
    };

    handleUpdateInput = (searchText) => {
        this.setState({
            searchText: searchText,
        });
    };

    handleNewRequest = () => {
        this.setState({
            searchText: '',
        });
    };

    render() {
        return (
            <div>
                <AutoComplete
                    hintText="Type 'r', case insensitive"
                    searchText={this.state.searchText}
                    onUpdateInput={this.handleUpdateInput}
                    onNewRequest={this.handleNewRequest}
                    dataSource={this.props.data}
                    filter={AutoComplete.caseInsensitiveFilter}
                    openOnFocus={true}
                />
            </div>
        );
    }
}
