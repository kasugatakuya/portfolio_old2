import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  product: {
    padding: '10px 10px 10px 10px'
  }
}));

const Product = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.product}>
      <Link href={'/posts/' + props.file}>
        <a>{props.title}</a>
      </Link>
    </div>

  )
}

export default Product;