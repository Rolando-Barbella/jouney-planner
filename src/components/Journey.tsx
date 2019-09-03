import * as React from "react";

interface JourneyProps {
  journeis: Array<string>,
  dataTestId: string,
  journeyName?: string,
  verticalRow?: string,
  onClick?: Function | any,
}

const Journey: React.FC<JourneyProps> =
  ({ journeis, dataTestId, journeyName, verticalRow, onClick }) => (
    <ul data-testid={dataTestId}>
      {
        journeis.map((journey: string) => (
          <li
            key={journey}
            className={
              journeyName === journey ? 
              'active-circle' + verticalRow  
              : verticalRow 
            }
            onClick={() => onClick(journey)}
          >
            {journey}
          </li>
        ))
      }
    </ul>
  );

export default Journey;

Journey.defaultProps = {
  journeis: [],
  verticalRow: "",
  onClick: () => null,
};
