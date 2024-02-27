import React from "react";

export default class Editor extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = { content:'' }
    }

    render()
    {
        return (
            <textarea id="editor"></textarea>
        )
    }
}