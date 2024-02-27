import React from "react";

export default class Preview extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        const parsed_editor_txt = this.props.parsedTextAreaContent
        return (
            <div className="w-75 mt-3">
                <div id="preview" className="bg-secondary" dangerouslySetInnerHTML={{__html: parsed_editor_txt}}/>
            </div>
        )
    }
}