import { TextFieldProps } from "./text-field.props"

function TextField({ ...props }: TextFieldProps) {
    return (
        <label className="inline-block w-full">
            <input className="input" {...props} />
        </label>
    )
}

export default TextField