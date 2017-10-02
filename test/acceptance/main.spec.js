import Nightmare from 'nightmare'

// TODO: refactor and implement real tests etc
describe('When visiting the homepage', () => {
  test('it renders the app shell', (done) => {
    /* eslint babel/new-cap: 0 */
    const nightmare = Nightmare({
      gotoTimeout: 1000,
      loadTimeout: 1000,
      executionTimeout: 1000
    })

    nightmare
      .goto('http://localhost:7770')
      .wait('.app-wrapper')
      .evaluate(() =>
        document.querySelector('.app-wrapper').innerText
      )
      .end()
      .then((result) => {
        expect(result).toContain('StaCI')
        done()
      })
      .catch((err) => {
        console.error(err)
      })
  })
})
