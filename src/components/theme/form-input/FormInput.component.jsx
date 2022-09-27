import { FormInputLabel, Input, Group } from "./form-input.styles.jsx"

function FormInput({ label, ...rest }) {
  return (
    <Group>
      <Input {...rest} />
      {label && (
        <FormInputLabel shrink={rest.value.length}>{label}</FormInputLabel>
      )}
    </Group>
  )
}

export default FormInput
