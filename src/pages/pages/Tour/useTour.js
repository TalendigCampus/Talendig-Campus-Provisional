import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  doesKeyExist,
  tourKey,
  setShowTour,
  setIsMobile,
} from "../../../redux/slices/tourSlice";

const useTour = ({ localStorageKey }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem(localStorageKey)) {
      dispatch(setIsMobile({ isMobile: true }));
    }
    setTimeout(() => dispatch(doesKeyExist({ localStorageKey })), 500);
  }, [dispatch, localStorageKey]);

  const showTour = useSelector(tourKey);

  const setLocalStorageKey = () => {
    if (!showTour) {
      localStorage.removeItem(localStorageKey);
    } else {
      localStorage.setItem(localStorageKey, true);
    }
  };

  const handleTourOpening = () => {
    setLocalStorageKey();
    dispatch(setShowTour());
  };

  return [showTour, handleTourOpening];
};

export default useTour;
