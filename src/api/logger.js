const logError = (msn, error) => {
  if (error?.response?.status === 404) {
    console.error(`BAD_REQUEST IN THIS API CALL ${msn}`, error)
  }
  console.error('LOGGER ERROR', msn, error)
}

export default logError
