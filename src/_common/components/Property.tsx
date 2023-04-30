import React from 'react';

export const Property = ({ property, value }: { property: string; value: string }) => {
  return (
    <div className="align-middle ft-title-02">
      {property} : <span className="ft-body-02">{value}</span>
    </div>
  );
};
