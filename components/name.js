
// @flow
import * as React from 'react';

type NameProps = {
    data: {name: string}
};

function Name({ data }: NameProps): React.Node {
    return <h3>{data.name}</h3>;
}

export default (Name: React.AbstractComponent<NameProps>);
