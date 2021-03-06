import React from "react"
import styled from "styled-components"

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Col = styled.div`
  flex: 1 1 30%;
  max-width: 40%;
  margin: 10px;
  height: 150px;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.font};
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  font-family: sans-serif;
`

export const Post = () => {
  return (
    <Row>
      {[1, 2, 3, 4, 5, 6].map(_ => (
        <Col key={_}>
          <h1>Hello</h1>
          <p>Trying to Add Dark Theme</p>
        </Col>
      ))}
    </Row>
  )
}