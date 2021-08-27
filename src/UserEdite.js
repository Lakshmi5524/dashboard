import React from 'react'

export function UserEdit(props)  {
    let userid= props.match.params.id
    return (
        <div>
            User Edit {userid}
        </div>
    )
}
