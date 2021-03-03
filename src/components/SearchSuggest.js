import React from 'react'
import Autosuggest from 'react-autosuggest';
import axios from 'axios'

const fetchTags = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/tags`) 
    return res
}

let languages
fetchTags().then(res => languages = res.data)
  
  // https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
  function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());
    
    if (escapedValue === '') {
      return [];
    }
  
    const regex = new RegExp('^' + escapedValue, 'i');
    return languages.filter(language => regex.test(language.tag)).slice(0, 10);
  }
  
  function getSuggestionValue(suggestion) {
    return suggestion.tag;
  }
  
  function renderSuggestion(suggestion) {
    return (
      <span>{suggestion.tag}</span>
    );
  }
  
  class SearchSuggest extends React.Component {
    constructor({ onChange }) {
      super();
  
      this.state = {
        value: '',
        suggestions: []
      };
      this.changeParent = onChange
    }
  
    onChange = (event, { newValue, method }) => {
      this.setState({
        value: newValue
      });
      this.changeParent(event)
    };
    
    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: getSuggestions(value)
      });
    };
  
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };
  
    render() {
      const { value, suggestions } = this.state;
      const inputProps = {
        value,
        onChange: this.onChange
      };
  
      return (
        <Autosuggest 
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
      );
    }
  }

export default SearchSuggest