import React from 'react'
import { Card } from 'react-vant'

export default function Block(props: { children: JSX.Element }) {
  return (
    <Card
      style={{
        backgroundColor: 'transparent'
      }}
    >
      <Card.Body>{props.children}</Card.Body>
    </Card>
  )
}
