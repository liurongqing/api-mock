/**
 * @mocks
 * {
 *  code: 100,
 *  data|5: [
 *    { id: 1, name: 2 }
 *  ]
 * }
 *
 * @param data
 * @returns
 */
export const getUser = (data) => {
  return fetch('/aa/bb', {
    body: data,
  })
}
