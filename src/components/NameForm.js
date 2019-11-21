import React from 'react';

function NameForm(props) {
  const handleTextInput = (e) => {
    props.onChangeName(e.target.value);
  };

  return (
    <div className="form">
      <input type="text"
        value={props.name}
        onChange={handleTextInput} />
    </div>
  );
}

export default NameForm;