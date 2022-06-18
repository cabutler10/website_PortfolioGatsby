import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import Hero from "../Hero"

describe("Hero", () => {
  it("renders correctly", () => {
    const container = render(<Hero />)
    expect(container).toMatchSnapshot()
  })
})
