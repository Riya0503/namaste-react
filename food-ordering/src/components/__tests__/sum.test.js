import { sum } from "../sum"

test("Sum function should calculate sum of two number", () => {
    const result = sum(2,4)

    expect(result).toBe(6);
})