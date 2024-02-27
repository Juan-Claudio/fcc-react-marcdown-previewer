import { createStore } from "redux"
import { connect } from "react-redux"
import { marked } from "marked"
import Editor from "../components/Editor"
import Preview from "../components/Preview"

const PARSE = 'PARSE'
const parseTextAreaContent = (textAreaContent) =>
{
    return {type:PARSE, textAreaContent}
}
const parseReducer = (state = '', action) =>
{
    switch(action.type)
    {
        case PARSE:
            const parsed_content = marked(
                action.textAreaContent.replace(/\n/g,'  \n')
            )
            return parsed_content
        default: return state
    }
}

const store = createStore(parseReducer)

const mapStateToProps = (state) =>
{
    return {parsedTextAreaContent: state}
}
const mapDispatchToProps = (dispatch) =>
{
    return {
        updateParsedTextAreaContent: (textAreaContent) =>
        {
            dispatch(parseTextAreaContent(textAreaContent))
        }
    }
}

const EditorContainer = connect( null, mapDispatchToProps)(Editor)
const PreviewContainer = connect( mapStateToProps, null)(Preview)

export {store, EditorContainer, PreviewContainer}