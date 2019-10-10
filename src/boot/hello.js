import hello from 'hellojs'

export default ({ Vue }) => {
  hello.init({
    google: '673250837210-14jicb3aaf4qsnqr5g6f5imate85nhpr.apps.googleusercontent.com'
  })
  Vue.prototype.$hello = hello
}
