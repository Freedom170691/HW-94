import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchDevelopments} from "../../store/sagas/developmentsSagas";
import {fetchDevelopmentsRequest} from "../../store/actions/developmentsActions";

const ListPage = () => {
  const dispatch = useDispatch();
  const developments = useSelector(state => state.developments)


  useEffect(() => {
    dispatch(fetchDevelopmentsRequest());
  }, []);

  return (
    <div>

    </div>
  );
};

export default ListPage;