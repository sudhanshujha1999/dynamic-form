import React, { ChangeEvent, useState } from 'react'
import {
  TextField,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
  IconButton,
  Grid,
  Box,
  InputLabel,
  FormControl,
} from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import styled from '@emotion/styled'
import { colors } from './MuiWrapper/colors'
import { useSnackbar } from 'notistack'

interface AddNewButtonPropTypes {
  isFormEmpty: boolean
}

const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: center;
  max-width: 900px;
  background-color: #1e1e1e;
  padding: 2rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219, 0.2) 0px 0px 0px 1px inset;
  backdrop-filter: blur(6px);
  background-color: rgb(121 51 51 / 29%);
`
const AddNewButton = styled(Button)<AddNewButtonPropTypes>`
  align-self: ${(props) => (props.isFormEmpty ? 'center' : 'flex-end')};
  margin-bottom: 2rem;
  transition: transform 0.1s ease-in;
`
const SubmitButton = styled(Button)`
  transition: all 0.1s ease;
`

type FormData = {
  name: string
  gender: string
  adult: boolean
}

const initialFormData: FormData[] = [
  {
    name: '',
    gender: '',
    adult: false,
  },
]

const DynamicForm: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar()
  const [formData, setFormData] = useState<FormData[]>(initialFormData)

  const handleAddRow = () => {
    setFormData([...formData, { name: '', gender: '', adult: false }])
  }

  const handleRemoveRow = (index: number) => {
    const newFormData = [...formData]
    newFormData.splice(index, 1)
    setFormData(newFormData)
  }

  const handleFormChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    index: number
  ) => {
    const { name, value, type } = event.target
    // using regex to check if input value contains only letters and numbers
    const regex = /^[a-zA-Z0-9]+$/

    if (name === 'name' && value?.length > 0 && !regex.test(value)) {
      return
    }
    const newValue = type === 'checkbox' ? !formData[index].adult : value
    const newFormData = [...formData]
    newFormData[index] = {
      ...newFormData[index],
      [name]: newValue,
    }
    setFormData(newFormData)
  }

  const checkFormData = () => {
    const invalidIndexes: number[] = []
    formData.forEach((item, index) => {
      if (!item.name || !item.gender) {
        invalidIndexes.push(index + 1)
      }
    })
    return invalidIndexes
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const invalidIndexes = checkFormData()
    if (invalidIndexes.length > 0) {
      enqueueSnackbar(
        `Invalid Input at Block${
          invalidIndexes.length > 1 ? 's' : ''
        } : ${invalidIndexes.join(', ')}`,
        {
          variant: 'error',
        }
      )
    } else {
      console.log(formData)
      enqueueSnackbar(`Successfully Submitted Form`, {
        variant: 'success',
      })
    }
  }

  return (
    <form
      style={{
        width: '100%',
        maxWidth: '900px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
      }}
      onSubmit={handleSubmit}
    >
      {formData.map((row, index) => (
        <FormContainer key={index}>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={3.5}>
              <TextField
                name="name"
                label="User Name"
                value={row.name}
                onChange={(event) => handleFormChange(event, index)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={3.5}>
              <FormControl variant="outlined" style={{ width: '100%' }}>
                <InputLabel id="gender-select-label">Gender</InputLabel>
                <Select
                  name="gender"
                  label="Gender"
                  value={row.gender}
                  onChange={(event) =>
                    handleFormChange(
                      event as unknown as ChangeEvent<HTMLSelectElement>,
                      index
                    )
                  }
                  fullWidth
                  variant="outlined"
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    name="adult"
                    checked={row.adult}
                    onChange={(event) => handleFormChange(event, index)}
                  />
                }
                label="Above 18 yrs"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconButton
                onClick={() => handleRemoveRow(index)}
                color="secondary"
                style={{
                  backgroundColor: colors.blue1,
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              >
                <Remove /> Remove Row
              </IconButton>
            </Grid>
          </Grid>
        </FormContainer>
      ))}
      <AddNewButton
        isFormEmpty={formData.length === 0}
        variant="outlined"
        color="primary"
        onClick={handleAddRow}
      >
        <Add />
        Add Row
      </AddNewButton>
      {formData.length > 0 && (
        <SubmitButton
          variant="outlined"
          color="primary"
          type="submit"
          style={{ padding: '1rem 3rem' }}
        >
          Submit
        </SubmitButton>
      )}
    </form>
  )
}

export default DynamicForm
