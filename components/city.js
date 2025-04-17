// @flow
import * as React from 'react';

type CityProps = {
    data: { city: string }
};

function City({ data }: CityProps): React.Node {
    return <h3>{data.city}</h3>;
}

export default (City: React.AbstractComponent<CityProps>);
