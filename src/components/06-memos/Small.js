import React from 'react'

export const Small = React.memo(({value}) => {//memo allows us to notrender the component
    return (
        <small>
            {value}    
        </small>
    )
})
