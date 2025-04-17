// @flow
import * as React from 'react';
import Name from '../components/name';
import withLoadingAndError from './loadingAndError';

const NameComponent = withLoadingAndError<{ name: string }>(Name);

type State = {
  loading: boolean,
  error: ?Error,
  data: ?{ name: string }
};

type Props = {};

export default class NameContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            data: null
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false, data: { name: 'John Smith' } });
        }, 2500);
    }

    render(): React.Node {
        const { loading, error, data } = this.state;
        return <NameComponent loading={loading} error={error} data={data} />;
    }
}
