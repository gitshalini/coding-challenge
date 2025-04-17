// @flow
import * as React from 'react';
import City from '../components/city';
import withLoadingAndError from './loadingAndError';

const CityComponent = withLoadingAndError<{city: string}>(City);

type State = {
    loading: boolean,
    error: ?Error,
    data: ?{city: string}
};

type Props = {};

export default class CityContainer extends React.Component<Props, State> {
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
            this.setState({ loading: false, data: { city: 'London, UK' } });
        }, 2000);
    }

    render(): React.Node {
        const { loading, error, data } = this.state;
        return <CityComponent loading={loading} error={error} data={data} />;
    }
}
