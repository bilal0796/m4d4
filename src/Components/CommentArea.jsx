import { InputGroup, FormControl } from 'react-bootstrap'

const CommentArea = () =>(
    <InputGroup>
        <InputGroup.Prepend>
            <InputGroup.Text>Comments</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl as="textarea" aria-label="With textarea" />
    </InputGroup>
)

export default CommentArea