// @flow
import * as React from 'react';
import Link from './link';

type LinkData = {
  url: string,
  text: string
};

type Props = {
  description: string,
  links: Array<LinkData>
};

export default function DescriptionWithLinks({ description, links }: Props): React.Node {
    if (!links || links.length === 0) return <div>{description}</div>;

    const linkMap = new Map(links.map(link => [link.url, link.text]));

    const descText = description.split(/(\s+)/);

    return (
        <div>
            {descText.map((word, index) => {
                const trimmedWord = word.replace(/[.,!?]+$/, '');
                const addTrimmedWord = word.slice(trimmedWord.length);
                const linkText = linkMap.get(trimmedWord);

                if (linkText) {
                    return (
                        <React.Fragment key={index}>
                            <Link url={trimmedWord}>{linkText}</Link>{addTrimmedWord}
                        </React.Fragment>
                    );
                }

                return <React.Fragment key={index}>{word}</React.Fragment>;
            })}
        </div>
    );
}
