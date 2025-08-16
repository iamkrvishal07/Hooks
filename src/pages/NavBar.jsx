import React from 'react'

const NavBar = () => {
    console.log("I am re-rendering Help me Bro ! ")
  return (
    <div>
      <h1>NavBar</h1>
    </div>
  )
}

export default React.memo(NavBar)
// export default React.memo(NavBar) -> using this it fix problem but

// export default NavBar

