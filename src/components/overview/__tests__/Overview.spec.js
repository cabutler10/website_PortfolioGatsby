import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import Overview from "../Overview"

describe("Overview", () => {
  it("renders correctly", () => {
    const container = render(<Overview />)
    expect(container).toMatchSnapshot()
  })
})
