// @flow
import * as React from 'react';
import DescriptionWithLinks from './descriptionWithLinks';
import Name from '../containers/name';
import City from '../containers/city';

export default function App(): React.Node {
    return (
        <>
            <Name />
            <City />
            <DescriptionWithLinks
                description="My favourite website is www.mixcloud.com and my profile can be found at https://www.mixcloud.com/spartacus/."
                links={[
                    { url: 'www.mixcloud.com', text: 'Mixcloud!' },
                    {
                        url: 'https://www.mixcloud.com/spartacus/',
                        text: 'Spartacus'
                    }
                ]}
            />
        </>
    );
}
