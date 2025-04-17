// @flow
import * as React from 'react';

type Props<T> ={
    loading: boolean,
    error: ?Error,
    data: ?T
};
export default function withLoadingAndError<T:{}>(WrappedComponent: React.ComponentType<{data: T}>): React.ComponentType<Props<T>> {
    return function WithLoadingAndErrorComponent({loading, error, data}: Props<T>): React.Node {
        if (loading) {
            return <div>Loading..</div>;
        }
        if (error != null) {
            return <div>Error!</div>;
        }
        if (data != null) {
            return <WrappedComponent data={data} />;
        }
        return null;
    };
};
