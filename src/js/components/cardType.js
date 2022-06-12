export const cardType = (value) => {
 if (value.match(/^4026|^417500|^4508|^4844|^4913|^4917/)) {
    return 'visa-electron'
  } else if (value.match(/^5018|^5020|^5038|^5893|^6304|^6759|^6761|^6762|^6763/)) {
    return 'maestro'
  } else if (value.match(/^34|^37/)) {
    return 'american-express'
  }else if (value.match(/^2/)) {
    return 'mir'
  }
  else if ((/^4/).test(value)) {
    return 'visa'
  }
  else {
    return ''
  }
}
