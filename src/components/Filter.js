import React, { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";

function Filter({ movieprop, callbackSearch }) {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : movieprop.filter(
          (Mov) => Mov.title.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const getSuggestionValue = (suggestion) => suggestion.title;

  const renderSuggestion = (suggestion) => <span>{suggestion.title}</span>;

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onBlur = (event, { highlightedSuggestion }) => {
    // console.log(highlightedSuggestion)
  };

  const onSuggestionsFetchRequested = ({ value, reason }) => {
    // console.log(value)
    // console.log(reason)
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "Type a Movie Name",
    value,
    onChange,
    onBlur,
  };

  function onSuggestionSelected(
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) {
    // console.log(suggestionValue)
    callbackSearch(suggestionValue, movieprop);
  }

  function shouldRenderSuggestions(value, reason) {
    return value.trim().length > 0;
  }

  const renderInputComponent = (inputProps) => {
    // console.log(inputProps)
    return (
      <div>
        <input {...inputProps} />
      </div>
    );
  };

  function renderSuggestionsContainer({ containerProps, children, query }) {
    return (
      <div {...containerProps}>
        {children}
        <hr />
        <div style={{ padding: "0 0 12px" }}>
          Press Enter or Click to search <strong>{query}</strong>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px 0" }}>
      <label
        style={{
          display: "block",
          textAlign: "center",
          fontSize: "20px",
        }}
      >
        Search For Your Favorite Movie :{" "}
      </label>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        alwaysRenderSuggestions={false}
        onSuggestionSelected={onSuggestionSelected}
        shouldRenderSuggestions={shouldRenderSuggestions}
        focusInputOnSuggestionClick={true}
        renderInputComponent={renderInputComponent}
        renderSuggestionsContainer={renderSuggestionsContainer}
      />
    </div>
  );
}

export default Filter;
