import React from 'react'
function NameTags(props) {
    return (
        <>
            <h5><a href={props.href}>{props.name}</a></h5>
        </>
    )
}

export default NameTags
