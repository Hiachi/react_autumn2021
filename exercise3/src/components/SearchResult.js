import React from 'react';
import styles from './SearchResult.module.css';
import { Col } from 'reactstrap';

export default function SearchResult(props) {
  return (
    <Col lg="3">
      <div className={ styles.product }>
          <div className={ styles.img }>
            <div>
              <a href=""><img src={`/images/${props.image}`} /></a>
            </div>

            <div className={ styles.name }>
              <a href="">{ props.name }</a>
            </div>

            <div className={ styles.prices}>
                <div className={ styles.price}><span>€</span><span>{ props.price }</span></div>
                <div className={ styles.price0}><span>€</span><span>{ props.subPrice }</span></div>
            </div>

            <div className={ styles.stock }>
                <span>In Stock: { props.stock } </span>
                <button className={ styles.addCart }>Add to Cart</button>
            </div>
            <div className={ styles.selloff }>
                <span className={ styles.selloffPer }>50%</span>
                <span className={ styles.selloffOff }>off</span>
            </div>

          </div>
      </div>
    </Col>
  )
}
