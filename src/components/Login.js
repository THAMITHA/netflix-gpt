import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_large.jpg" alt='logo'/>
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input type="text" placeholder="Email Address" className='p-4 my-4 w-full bg-gray-700'/>
        <input type="text" placeholder="Password" className='p-4 my-4 w-full bg-gray-700'/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>Sign In</button>
        <p className="py-4">New to Netflix? Sign Up Now</p>
      </form>
    </div>
  )
}

export default Login