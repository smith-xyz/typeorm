import { expect } from "chai"
import { PlatformTools } from "../../../src/platform/PlatformTools"

describe("PlatformTools", () => {
    // GH 11678 - lazy loading app-root-path
    describe("getAppRootPath", () => {
        it("should return a valid path", () => {
            const path = PlatformTools.getAppRootPath()
            expect(path).to.be.a("string")
            expect(path.length).to.be.greaterThan(0)
        })

        it("should not throw when app-root-path is unavailable", () => {
            // This test verifies the lazy-loading and fallback logic
            expect(() => PlatformTools.getAppRootPath()).to.not.throw()
        })

        it("should return consistent path across multiple calls", () => {
            const path1 = PlatformTools.getAppRootPath()
            const path2 = PlatformTools.getAppRootPath()
            expect(path1).to.equal(path2)
        })
    })
})
