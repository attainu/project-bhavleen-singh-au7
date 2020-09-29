import React from 'react'
import { Grid } from '@material-ui/core'
import profilePic from '../images/negi.png';

function UserProfile() {
    return (
        <Grid container direction="column" alignItems="center"> 
            <Grid item xs={12} sm={8}>
                Content 
            </Grid>
            <Grid item xs={12} sm={8}>
                Content
            </Grid>
        </Grid>
    )
}

export default UserProfile




// <Grid item sm={2}></Grid>
// <Grid item container xs={12} sm={8}>
//     <Grid item container>
//         <Grid xs={4} item>
//             <img src={profilePic} alt="profile pic" width="180px"></img>
//         </Grid>
//         <Grid xs={8} container item> 
//             <Grid item xs={12}><h1>oncenegisaid</h1></Grid>
//             <Grid item xs={12} container >
//                 <h3 item="true">17 posts</h3>  
//                 <h3 item="true">472 followers</h3>    
//                 <h3 item="true">1030 following</h3>     
//             </Grid>
//             <Grid item xs={12}>QARAN NEGi</Grid>
//         </Grid>
//     </Grid>
//     <Grid item>Photo Section</Grid>
// </Grid>
// <Grid item sm={2}></Grid>