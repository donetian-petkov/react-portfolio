    import React, {useEffect, useState} from 'react';

    export function withStatusOfLoading(WrappedComponent) {

        return function(props) {

            const [loaded, setLoaded] = useState(false);

            useEffect(() => {
                setLoaded(true);
            }, []);

           const customStyle = {isLoaded: loaded }


            return <WrappedComponent {...props} {...customStyle} />;
        };
    }