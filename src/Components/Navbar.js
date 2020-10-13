import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './module.css'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      
      
    },
    

  
  },
}));
// // import React from 'react';
// import { emphasize, withStyles } from '@material-ui/core/styles';
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Chip from '@material-ui/core/Chip';
// import HomeIcon from '@material-ui/icons/Home';
// import {useHistory} from 'react-router-dom';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Home from './Home';

// const StyledBreadcrumb = withStyles((theme) => ({
//   root: {
//     backgroundColor: theme.palette.grey[100],
//     height: theme.spacing(3),
//     color: theme.palette.grey[800],
//     fontWeight: theme.typography.fontWeightRegular,
//     '&:hover, &:focus': {
//       backgroundColor: theme.palette.grey[300],
//     },
//     '&:active': {
//       boxShadow: theme.shadows[1],
//       backgroundColor: emphasize(theme.palette.grey[300], 0.12),
//     },
//   },
// }))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }


// export default function Navbar() {
//   return (
//     <Breadcrumbs aria-label="breadcrumb">
//       <StyledBreadcrumb
//         component="a"
//         href="/Home"
//         label="Home"
//         icon={<HomeIcon fontSize="small" />}
//         onClick={<>}
//       />
//       <StyledBreadcrumb component="a" href="#" label="Catalog" onClick={handleClick} />
//       <StyledBreadcrumb
//         label="Accessories"
//         // deleteIcon={<ExpandMoreIcon />}
//         onClick={handleClick}
//         // onDelete={handleClick}
//       />
//     </Breadcrumbs>
//   );
// }




function Navbar() {
  const classes = useStyles();
  return (
    <div className="div-product">
      <button variant="contained" color="primary"><Link to = "/" className="Link">Home</Link></button>
      <br></br>
      <button><Link to = "/product" className="Link">Product</Link></button>
      <br></br>
      <button variant="contained" color="secondary"><Link to = "/about" className="Link"> About</Link></button>
      <br></br>
      
      {/* <Link to = "/productitems">productitems</Link> */}
      
    </div>
  );
}

export default Navbar;
