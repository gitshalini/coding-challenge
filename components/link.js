// @flow
import * as React from 'react';

type Props = {
  url: string,
  children: React.Node
};

export default function Link({ url, children }: Props): React.Node {
    if (!url) {
        return <span>{children}</span>;
    }
    const Url = url.startsWith('http') ? url : `https://${url}`;
    return (
        <a href={Url} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
}
