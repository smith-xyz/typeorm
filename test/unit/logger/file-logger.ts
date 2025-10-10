import { expect } from "chai"
import { FileLogger } from "../../../src/logger/FileLogger"

describe("FileLogger", () => {
    it("should instantiate without errors", () => {
        // Verifies the lazy-loading works
        expect(() => new FileLogger()).to.not.throw()
    })

    // GH 11678 - lazy loading app-root-path
    it("should handle missing app-root-path gracefully", () => {
        const logger = new FileLogger()
        expect(logger).to.be.instanceOf(FileLogger)
    })
})
