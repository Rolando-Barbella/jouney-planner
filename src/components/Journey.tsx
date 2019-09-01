import React from 'react';

const Journey = (props: Object | string | Function | any) => {
  return(
    <ul data-testid={props.dataTestId}>
      {
        props.journeis.map((journey: string) => (
          <li
            key={journey}
            className={
              props.journeyName === journey ? 
              'active-circle' + props.verticalRow  
              : props.verticalRow 
            }
            onClick={() => props.onClick(journey)}
          >
            {journey}
          </li>
        ))
      }
    </ul>
  )
}

export default Journey;

Journey.defaultProps = {
  journeis: [],
  verticalRow: "",
  onClick: () => null,
};