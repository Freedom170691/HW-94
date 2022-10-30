import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import EventForm from "../../components/EventForm/EventForm";
import {fetchDevelopmentsRequest} from "../../store/actions/developmentsActions";

const NewEvent = () => {
  const dispatch = useDispatch();
  const developments = useSelector(state => state.developments);

  useEffect(() => {
    dispatch(fetchDevelopmentsRequest());
  }, [dispatch]);

  const onDevelopmentsFormSubmit = productData => {
    dispatch(createProduct(productData));
  };
  return (
    <div>

      <EventForm
        onSubmit={onDevelopmentsFormSubmit}
      />
    </div>
  );
};

export default NewEvent;