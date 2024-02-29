import 'highlight.js/styles/github-dark.css';
import '../styles/Preview.css'
import React from "react";
import Highlight from 'highlight.js'

export default class Preview extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    componentDidUpdate(){ Highlight.highlightAll() }

    render()
    {
        const parsed_editor_txt = this.props.parsedTextAreaContent
        return (
            <div id="Preview-container" className={this.props.disposition[2]}>
                <div id="preview" dangerouslySetInnerHTML={{__html: parsed_editor_txt}}/>
            </div>
        )
    }
}