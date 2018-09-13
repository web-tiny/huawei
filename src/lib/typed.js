import * as typed from 'schema-typed'
import { flaser } from 'object-flaser'

function fixType (type) {
  switch (type) {
  case 'string': return typed.StringType()
  case 'object': return typed.ObjectType()
  case 'number': return typed.NumberType()
  case 'array': return typed.ArrayType()
  case 'date': return typed.DateType()
  default: console.error('fixType error')
  }
}

function fillModel (model) {
  Object.keys(model).forEach(value => {
    model[value] = fixType(model[value])
  })
  return model
}

const cheakTyped = function (model, data) {
  const _model = typed.SchemaModel(fillModel(model))
  const _result = _model.check(flaser(data))
  let _state = true

  Object.keys(_result).forEach(value => {
    _result[value].hasError !== false && (_state = false)
  })

  return _state
}

export default cheakTyped
