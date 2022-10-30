import React, {useState} from 'react';

const EventForm = () => {
  const [state, setState] = useState({
    title: "",
    datetime: "",
    duration: "",
  });

  const submitFormHandler = e => {
    e.preventDefault();
    const formData = new FormData();

    Object.keys(state).forEach(key => {
      formData.append(key, state[key]);
    });

    onSubmit(formData);
  };

  const inputChangeHandler = e => {
    const {name, value} = e.target;

    setState(prevState => {
      return {...prevState, [name]: value};
    });
  };
  return (
    <div>

    </div>
  );
};

export default EventForm;