import React, { Fragment, useState } from 'react'
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage'

type SetErrorApiType = {
    setErrorApi: (bool: boolean) => void
}

export const withErrorApi = (View: React.ComponentType<SetErrorApiType>) => {
    return (props: any) => {
        const [errorApi, setErrorApi] = useState(false)
        return (
            <Fragment>
                {errorApi ?
                    <ErrorMessage />
                    :
                    <View setErrorApi={setErrorApi} {...props} />
                }
            </Fragment>
        )
    }
}

