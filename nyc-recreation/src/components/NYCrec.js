// import React from 'react'
// import PoolContainer from './PoolContainer.js'
// import BbqContainer from './BbqContainer.js'
// import TennisContainer from './TennisContainer.js'
// import ZooContainer from './ZooContainer.js'
// import { Route, Link } from 'react-router-dom'
//
// export default class NYCrec extends React.Component {
//   render() {
//     return(
//       <div>
//         <h3>Explore NYC recreational activities</h3>
//         <Link to="/pools">Cool off in an outdoor pool!</Link>
//         <Route exact path="/pools" render={(props) => <PoolContainer {...props}/>}/>
//         <Link to="/bbqs">Fire up the grill at a local BBQ</Link>
//         <Route exact path="/bbqs" component={BbqContainer}/>
//         <Link to="/tennis">Play some tennis</Link>
//         <Route exact path="/tennis" component={TennisContainer}/>
//         <Link to="/zoos">Learn about exotic animals</Link>
//         <Route exact path="/zoos" component={ZooContainer}/>
//       </div>
//     )
//   }
// }

//add form for searching later, form renders based on user's selected category

//tried using at first, but had issues calling children components when it wasn't on the exact path.
