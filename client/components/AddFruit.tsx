import type { NewFruit } from '../../models/fruit'

import { useState } from 'react'

import { GridForm, ColOne, ColTwoText, Button } from './Styled'

interface Props {
  onAdd: (fruit: NewFruit) => void
  onClose: () => void
}

const emptyFruit: NewFruit = {
  name: '',
  averageGramsEach: 0,
}

function AddFruitForm({ onAdd, onClose }: Props) {
  const [newFruit, setNewFruit] = useState(emptyFruit)

  const { name: addingName, averageGramsEach: addingGrams } = newFruit

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewFruit({
      ...newFruit,
      [name]: value,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    onAdd(newFruit)
  }

  return (
    <>
      <h2>Add new</h2>
      <GridForm onSubmit={handleSubmit}>
        <ColOne htmlFor="name">Name:</ColOne>
        <ColTwoText
          type="text"
          name="name"
          id="name"
          value={addingName}
          onChange={handleChange}
        />

        <ColOne htmlFor="averageGramsEach">Average Grams Each:</ColOne>
        <ColTwoText
          type="number"
          name="averageGramsEach"
          id="averageGramsEach"
          value={addingGrams}
          onChange={handleChange}
        />

        <Button type="submit" disabled={addingName === '' || addingGrams === 0}>
          Add fruit
        </Button>
        <Button type="button" onClick={onClose}>
          Close
        </Button>
      </GridForm>
    </>
  )
}

export default AddFruitForm
