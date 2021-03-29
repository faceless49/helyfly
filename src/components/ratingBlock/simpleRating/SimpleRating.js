import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { styled } from "@material-ui/core/styles";
import s from './SimpleRating.module.scss';


export const SimpleRating = (props) => {
  const [value, setValue] = React.useState(5);
  const styles = {
    fontSize: "18px",
  };
  const BoxStyle = {
  };

  const BoxComponent = styled(Box)({... BoxStyle });
  const RatingComponent = styled(Rating)({ ...styles });

  return (
      <BoxComponent component="fieldset" borderColor="transparent">
        <RatingComponent name="read-only" value={value} readOnly/>
      </BoxComponent>
  );
}
