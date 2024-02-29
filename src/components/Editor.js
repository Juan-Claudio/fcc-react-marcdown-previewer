import '../styles/Editor.css'
import React from "react";

export default class Editor extends React.Component
{
    constructor(props)
    {
        super(props)
        this.default_text  = "# h1-Title\n"
        this.default_text += "## h2-Subtitle\n"
        this.default_text += "[Sabeludia url](https://www.sabeludia.com)\n"
        this.default_text += "`inline code`\n"
        this.default_text += "```\n//test of code\nfunction tt(param)\n{\n\treturn 'Ah ah ah'\n}\n```\n"
        this.default_text += "- list item\n\n"
        this.default_text += "> block\n"
        this.default_text += " quote\n\n"
        this.default_text += "![Sabeludia logo](https://www.sabeludia.com/favicon.ico \"Sabeludia Logo\")\n"
        this.default_text += "**A bolded text**\n"
        this.state = { textarea_content:this.default_text }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event)
    {
        this.setState({ textarea_content: event.target.value })
    }

    componentDidMount()
    {
        this.props.updateParsedTextAreaContent(this.state.textarea_content)
    }

    componentDidUpdate()
    {
        this.props.updateParsedTextAreaContent(this.state.textarea_content)
    }

    render()
    {
        return (
            <div id="Editor-container" className={this.props.disposition[1]}>
                <textarea id="editor" 
                    onChange={this.handleChange}
                    cols={80}
                    rows={15}
                >
                    {this.state.textarea_content}
                </textarea>
            </div>
        )
    }
}