const FormField = ({
                       id,
                       label,
                       type,
                       placeholder,
                       value,
                       onChange,
                       error,
                   }) => {
    return (
        <div className="form-group">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className={`input-field ${error ? "input-error" : ""}`}
                value={value}
                onChange={onChange}
            />
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default FormField;