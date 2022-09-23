import "./form-input.styles.scss"

function FormInput({ label, ...rest }) {
  return (
    <div className='group'>
      <input id={rest.id} {...rest} className='form-input' />
      {label && (
        <label
          htmlFor={rest.id}
          className={`${rest.value.length && "shrink"} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  )
}

export default FormInput
