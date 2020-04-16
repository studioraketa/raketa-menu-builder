import React from 'react'
import { useForm } from 'react-hook-form'
import { Copy, Delete } from './icons'
import { Button, Toolbar, Field, Stack } from '@raketa-cms/raketa-mir'

export default ({ value, onChange, onRemove, onDuplicate }) => {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: value,
  })

  React.useEffect(() => {
    setValue('label', value.label)
    setValue('url', value.url)
  }, [value])

  return (
    <form onSubmit={handleSubmit(onChange)}>
      <Stack>
        <Field
          r={register}
          name='label'
          label='Label'
          wrapperProps={{ style: { marginRight: '0.5em' } }}
        />
        <Field r={register} name='url' label='URL' />
      </Stack>

      <Toolbar>
        <Stack>
          <Button type='submit'>Save</Button>
          <Button variant='secondary' onClick={onDuplicate}>
            <Copy />
          </Button>
          <Button variant='secondary' onClick={onRemove}>
            <Delete />
          </Button>
        </Stack>
      </Toolbar>
    </form>
  )
}
